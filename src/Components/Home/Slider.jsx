
import { Carousel } from "@material-tailwind/react";
import React from "react";

const Slider = () => {
    return<>
    <section   style={{
                    gridTemplateColumns: "auto",
                    gap: "10px",
                    width: "100%",
                }}>
      <Carousel className="h-100 w-full rounded-lg object-cover" autoplay = {true} autoplayDelay = {3000} loop = {true} 	transition = {{ type: "tween", duration: 1 }} style={{ gridColumns: "1/7" }}>
      <img
        src="https://www.deichmann.com/en-gb/medias/09-TheBootStop-H6-desktop-main-banner-split-1280x450-Ladies.jpg?context=bWFzdGVyfGltYWdlc3wxMTkzMTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDk1L2g3Ni84OTQ2NjMzNDQxMzEwLmpwZ3xmYTlhYmUxNzI3MmQ5YTA1YzZhNThlYWM2ZGE4MThkNWNkODczNjY3MDBlOTYyMGJhY2IzMDcxNjU1N2Q1YTkx"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.deichmann.com/en-gb/medias/09-MensWalkingShoesBanner-H6-desktop-main-banner-split-1280x450.jpg?context=bWFzdGVyfGltYWdlc3w2NzU3OTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDI1L2g4NC84OTQ3MzY3ODA0OTU4LmpwZ3w5ODg0ZmI5OWQ5Y2VmZjMyNDRhMTZmMmIwMmZhYTc2YWZhMmU1OTY3MjcwYjZjOTNlZWI3NDNjYWU2MTlmY2E4"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.deichmann.com/en-gb/medias/09-TheBootStop-H6-desktop-main-banner-split-1280x450-Kids.jpg?context=bWFzdGVyfGltYWdlc3wxMjM0OTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDAwL2gxZS84OTQ2NjMyNDI1NTAyLmpwZ3wwOTVhNGM5Y2FjYjYzZjI0M2Y5ZmExZGRhN2YxMTUzOTNmNGRkZjlkMWQ3NjA3MTk4YjIwMjkwOGJhNTBiZGJk"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </section>
    </>
}
export default Slider;