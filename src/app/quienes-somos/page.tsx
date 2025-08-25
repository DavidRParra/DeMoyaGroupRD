import Image from "next/image";

function Page() {
    return (
        <div className="flex justify-center items-center w-full mx-auto h-[100vh] gap-9">
            <div className="flex flex-col items-center gap-[2rem]">
                <Image
                    src="/Quienes_Somos.jpg"
                    alt="Quienes Somos"
                    width={1200}
                    height={800}
                    className="rounded-lg shadow-lg w-[20rem] object-cover"
                />

                <div>
                    <p>CEO</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-[2rem]">
                <Image
                    src="/Quienes_Somos.jpg"
                    alt="Quienes Somos"
                    width={1200}
                    height={800}
                    className="rounded-lg shadow-lg w-[20rem] object-cover"
                />

                <div>
                    <p>CEO</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-[2rem]">
                <Image
                    src="/Quienes_Somos.jpg"
                    alt="Quienes Somos"
                    width={1200}
                    height={800}
                    className="rounded-lg shadow-lg w-[20rem] object-cover"
                />

                <div>
                    <p>CEO</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-[2rem]">
                <Image
                    src="/Quienes_Somos.jpg"
                    alt="Quienes Somos"
                    width={1200}
                    height={800}
                    className="rounded-lg shadow-lg w-[20rem] object-cover"
                />

                <div>
                    <p>CEO</p>
                </div>
            </div>
        </div>
    );
}

export default Page;