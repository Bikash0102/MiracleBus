import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import {toast} from 'react-toastify';

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);
		try {
			const res = await fetch("http://localhost:8080/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.removeItem("Bus-User");
			const pastDate = new Date(0);  // Create a date in the past
			console.log(pastDate)
    		document.cookie = 'jwt=; expires=' + pastDate.toUTCString() + '; path=/';  // Replace 'myCookieName' with your cookie name
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;
