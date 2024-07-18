import { useState } from "react";
import {toast} from 'react-toastify';
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
 
	const login = async ({email, password}) => {
		console.log(password);
		const success = handleInputErrors({email, password});
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("http://localhost:8080/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			let d = new Date();
    		d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    		let expires = "expires=" + d.toUTCString();
    		document.cookie = "jwt" + "=" + data.token + ";" + expires + ";path=/";
			localStorage.setItem("Bus-User", JSON.stringify(data));
			
			setAuthUser(data);
			toast.success("Successfully LOgin");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors({email, password}) {
	if (!email || !password) {
		console.log(email);
		toast.error("Please fill in all fields");
		return false;
	}
	

	return true;
}
