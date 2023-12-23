import React from "react";
import Map from "../../Components/Uitily/Map";
import { Button, Input, Textarea } from "@material-tailwind/react";

const ContactUsPage = () => {
    return (
        <>
            <div className="flex justify-content-between mx- w-2 my-2 p-2">
                <div>
                    <h1 className="bg-indigo-200 rounded text-center text-xl m-8">
                        SEND US A MESSAGE
                    </h1>
                    <div className="w-[32rem] m-0 ">
                        <div className="mb-4">
                            <Input type="text" label="Your Name*" />
                        </div>
                        <div className="mb-4">
                            <Input
                                id="email"
                                type="email"
                                label="Email address*"
                            />
                        </div>
                        <div className="mb-4">
                            <Input label="Phone number" type="number" />
                        </div>
                    </div>

                    <div className="relative w-[32rem] ">
                        <div className="mb-4">
                            <Textarea placeholder="Your Message" rows={8} />
                        </div>
                        <div className="flex  gap-2">
                            <Button
                                size="sm"
                                color="green"
                                className="rounded-md"
                            >
                                Post Comment
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-[32rem] m-0 ">
                    <div className=" bg-indigo-200 rounded text-center text-xl m-8 ">
                        <h1>CONTACT INFORMATION</h1>
                    </div>
                    <div className="flex text-center text-xl m-8 w-[32rem] ">
                        <div className="w-[32rem] m-0 ">
                            <p>1100 favoritenstrasse</p>
                            <p>Vienna, Austria.</p>
                            <p>+01 234 567 7890</p>
                            <p>Email:you@example.com </p>
                        </div>
                        <div>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ContactUsPage;
