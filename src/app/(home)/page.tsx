import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="p-4 space-y-4">
      <Button variant={"elevated"}>I am a button</Button>
      <Input placeholder="Wassup"></Input>
      <Progress value={33}></Progress>
      <Textarea placeholder="enter some text"></Textarea>
      <Checkbox></Checkbox>
    </div>
  );
};

export default page;
