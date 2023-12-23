
import SubTitle from "../Uitily/SubTitle";
import BrandCard from "./BrandCard";

const BrandSection = ({ image }) => {
    return (
        <>
            <div className="md:container mt-5">
                <SubTitle title="Discover our Brands" btnTitle="Show more" />
                <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-5 items-start ">
                    <BrandCard image="https://www.deichmann.com/en-gb/medias/04-4GridBrands-desktop-348x449-1.jpg?context=bWFzdGVyfHJvb3R8MTYzMTg4fGltYWdlL2pwZWd8aDE1L2g4OC84OTExNDg0NjQ5NTAyLmpwZ3xmNWFlYjVmMzI0YTgxY2RhZTk1MzA3Mzk5ODE1NTZiYjQwZjdhMzdiN2JiYzc2OTcxZDk3OTA4NTE4OGQ0ZTc5" />
                    <BrandCard image="https://www.deichmann.com/en-gb/medias/09-4GridBrands-desktop-348x449.jpg?context=bWFzdGVyfGltYWdlc3wxMzE5MjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDI1L2gzNy84OTQyNzAzMTQ5MDg2LmpwZ3wzMjEyZmEwMzA2YzU4ZTcyOWQ3YWVkM2ZkNDc0NjkxNmJjYjI3MzdlODg3ZGFkZGRiYjcyNmE0ZmVmN2JmZDI2" />
                    <BrandCard image="https://www.deichmann.com/en-gb/medias/04-4GridBrands-desktop-348x449-4.jpg?context=bWFzdGVyfHJvb3R8MTU0NDU1fGltYWdlL2pwZWd8aDJmL2g4Ni84OTExNDg2MDkxMjk0LmpwZ3w1Nzg3NzcwNjMwY2I5MjliMjg2MzZmNDg5ZjRhYjI0YTFlNThiZmU2NDE5MGNiN2M0MWM4MmM5ZGMzYmNiYWQ5" />
                    <BrandCard image="https://www.deichmann.com/en-gb/medias/04-4GridBrands-desktop-348x449-5.jpg?context=bWFzdGVyfHJvb3R8MjUyNTc3fGltYWdlL2pwZWd8aDI3L2gwMy84OTExNDg2MzUzNDM4LmpwZ3w3ZDIzM2E5M2E1MmMzOGQ4MDI3Yzc2OWM3YTVhN2FhOTYzMjk1NWFlNDUyM2IzZTFjNDAwNGMwNjhjOWEyYWQ2" />
                    <BrandCard image="https://www.deichmann.com/en-gb/medias/09-4GridBrands-desktop-348x449.jpg?context=bWFzdGVyfGltYWdlc3wxMzE5MjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDI1L2gzNy84OTQyNzAzMTQ5MDg2LmpwZ3wzMjEyZmEwMzA2YzU4ZTcyOWQ3YWVkM2ZkNDc0NjkxNmJjYjI3MzdlODg3ZGFkZGRiYjcyNmE0ZmVmN2JmZDI2" />
                    <BrandCard image="https://www.deichmann.com/en-gb/medias/04-KidsBrandTeasers-desktop-348x449-3.jpg?context=bWFzdGVyfHJvb3R8MTY2ODQ2fGltYWdlL2pwZWd8aGYzL2g4NC84OTA4MjQ2OTA4OTU4LmpwZ3xhODk0ZTk2YmIyYmMwY2I5ZWI4MmNjZWNjODIzODVkZjllY2NkNWUyOTdjZjg5ZTI5NzhmNDg3NjRiODhhZDUz" />
                </div>
            </div>
        </>
    );
};

export default BrandSection;
