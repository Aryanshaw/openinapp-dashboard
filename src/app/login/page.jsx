"use client";

import React, { useEffect } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session, router]);

  if (session.status === "loading") {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading....
      </p>
    );
  }

  return (
    <>
      {session.status === "unauthenticated" ? (
        <div className={styles.container}>
          <div className={styles.sideComponent}>
            <div className={styles.logoContainer}>
              <Image
                className={styles.sideImage}
                src="/assets/image/leftSide.png"
                alt="Your Logo"
                fill={true}
              />
              <div className={styles.boardText}>Board.</div>
              <div className={styles.logotext}>Logo</div>
              <div className={styles.icons}>
                {/* Add your new icons (e.g., GitHub) here */}
                <Image
                  src="/assets/image/github.png"
                  alt="GitHub"
                  width={30}
                  height={30}
                  className={styles.icon}
                />
                <Image
                  src="/assets/image/discord.png"
                  alt="discord"
                  width={30}
                  height={30}
                  className={styles.icon}
                />
                <Image
                  src="/assets/image/twitter.png"
                  alt="twitter"
                  width={30}
                  height={30}
                  className={styles.icon}
                />
                <Image
                  src="/assets/image/linkedin.png"
                  alt="linkedin"
                  width={30}
                  height={30}
                  className={styles.icon}
                />

                {/* Add more icons as needed */}
              </div>
            </div>
          </div>
          <div className={styles.userlogincomponents}>
            <h1>Sign in</h1>
            <br />
            <p>Sign in to your account</p>
            <br />
            <div className={styles.googlebtncontainer}>
              <Image
                src="/assets/image/google.png"
                width={15}
                height={15}
                alt="Google"
              />
              <button
                className={styles.signinwithgoogle}
                onClick={() => signIn("google")}
              >
                Sign in with gooogle
              </button>
            </div>
            <br />
            <div className={styles.textinputs}>
              <form>
                <label>Email Address</label>
                <input
                  type="text"
                  className={`${styles.username}`}
                  placeholder="Email Address"
                />
                <label>Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  className={` ${styles.password}`}
                />
                <p>Forgot password?</p>
                <button className={styles.signin}>Sign in</button>
                <br />
              </form>
              <p style={{ display: "flex" }}>
                Dont have an account ? register here
                {/* <p style={{ color: "blue", marginLeft: "5px" }}> register here</p> */}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <p>
            You are authenticated
            <Link href="/dashboard">Dashboard</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Login;