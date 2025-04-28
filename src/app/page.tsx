import Image from "next/image";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import CreateRecipe from "@/components/custom/createRecipe";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1>Welcome</h1>
      <p>Some text talking about website</p>
      <div>
        <Button>Browse Recipes</Button>
        <CreateRecipe />
      </div>
    </div>
  );
}
