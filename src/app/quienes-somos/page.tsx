import Image from "next/image";

function Page() {
    return (
        <div className="flex flex-col justify-center items-center w-full mx-auto gap-9 min-h-screen">
            <h3 className="text-red-500 text-[3rem] top-0">Nuestro Personal</h3>

            <div className="flex gap-9">
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
        </div>
    );
}

export default Page;