import Image from "next/image";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Login from "./login/page";
import Dashboard from "./dashboard/page";
import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(197, 218, 252)",
      }}
    >
      <p style={{ fontSize: "15px" }}>
        Hello Please redirect to the login page
      </p>
      <br />
      <br />
      <Link href={"/login"}>
        <div >
          <button
            style={{
              borderRadius: "4em",
              backgroundColor: "#36b3d8",
              borderColor: "#fff",
              color: "#fff",
              padding:"10px"
            }}
          >
            Login page
          </button>
        </div>
      </Link>
    </div>
  );
}
