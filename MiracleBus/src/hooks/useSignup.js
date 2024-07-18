import { useState } from "react";
import {toast} from 'react-toastify';

import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const [navigation, setNavigation] = useState(false);
	const { setAuthUser } = useAuthContext();


	const signup = async ({ firstName, lastName,email, password, confirmPassword }) => {
		
		const success = handleInputErrors({ firstName, lastName,email, password, confirmPassword });
		console.log(firstName);
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch('http://localhost:8080/api/auth/signup', {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ firstName, lastName,email, password, confirmPassword }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			// localStorage.setItem("Bus-User", JSON.stringify(data));
			// setAuthUser(data);
			toast.success("Successfully Register")
		  setNavigation(true);
		} catch (error) {
			console.log(error)
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	}; 
	
	return { loading, signup,navigation};
};
export default useSignup;

function handleInputErrors({ firstName, lastName, email,password, confirmPassword }) {
	if (! firstName|| !lastName || ! email||!password || !confirmPassword ) {
		toast.error("Please fill in all fields");
		console.log('EROOR');
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
