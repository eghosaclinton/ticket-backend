import { type Request, type Response } from "express";

export const userLogin = (
    req: Request,
    res: Response
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .status(400)
            .json({ error: "Email and password are required." });
    }
    if (email === "test@example.com" && password === "correctpassword") {
        return res.status(200).json({ message: "Login successful", userId: 1 });
    } 
    else {
        return res.status(401).json({ error: "Invalid email or password." });
    }
};
