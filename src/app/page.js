import Image from "next/legacy/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex gap-6 bg-white flex-col min-h-screen items-center p-3 lg:pl-[15%] lg:pr-[15%]">
      {/* main section about */}
      <div className="flex flex-col-reverse lg:flex-row gap-3">
        <div className="flex align-center justify-center flex-col gap-10 pr-3 pl-3 lg:w-[100%] w-[100%]">
          <p className="font-bold text-4xl lg:leading-[4rem] w-[100%]  lg:text-5xl lg:w-[95%]">
            Learn from anywhere with{" "}
            <span className="text-[rgb(254,134,28)]">OnLearn</span>
          </p>
          <p className="font-medium w-[100%] lg:w-[100%]">
            We offer online classes for students in school. With us students can
            take high quality and highly productive online classes from the
            comfort of your home.
          </p>
          <div className="flex space-2 flex-col  sm:flex-row w-[100%] lg:w-[50%] gap-4">
            <buton className="h-[53px] text-white font-medium bg-[rgb(13,12,34)] pl-10 pr-10  rounded-3xl flex items-center justify-center hover:cursor-pointer whitespace-nowrap hover:bg-[rgb(63,62,92)] duration-200 hover:scale-105">
              Find Courses
            </buton>
            <buton className="h-[50px]  pl-10 pr-10 text-black shadow font-medium bg-white rounded-3xl flex items-center justify-center hover:cursor-pointer whitespace-nowrap hover:shadow-xl duration-200 hover:scale-105">
              Get Started
            </buton>
          </div>
        </div>
        <div
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          }}
          className="flex w-[100%] items-center justify-center flex-col">
          <img
            className="w-[450px] h-[450px]"
            src="/images/teacher.png"
            alt="teacher"
          />
        </div>
      </div>

      {/* features of our web  */}

      <div className="grid mb-10 justify-center place-content-around grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-3 grid-rows-1 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-5">
        {/* <div className="flex p-2 devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-600 shadow-[0px_0px_10px_rgb(0,0,0,0.1)] justify-center items-center hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300 border-[1px_solid_rgb(0,0,0,0.1)] h-[100%]">
          <div className="rounded-full p-5 w-[100%] bg-[rgb(255,242,236)] h-[100px] w-[100px]">
            <img
              className="rounded-full h-[100%] w-[100%]"
              src="https://e-tuitions.com/assets/img/icons/classroom.png"
              alt="english grammer class"
            />
          </div>
          <div className="p-4">
            <p className="text-[rgb(0,35,90)] font-bold mb-2">
              Classes for School & College Students
            </p>
            <p className="line-clamp-2 font-medium text-black font-normal">
              We offer online classes for students in school & college.
            </p>
          </div>
        </div> */}
        <div className="flex p-2 devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-600 shadow-[0px_0px_10px_rgb(0,0,0,0.1)] justify-center items-center hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300 border-[1px_solid_rgb(0,0,0,0.1)] h-[100%]">
          <div className="rounded-full p-5 w-[100%] bg-[rgb(255,242,236)] h-[100px] w-[100px]">
            <img
              className="rounded-full h-[100%] w-[100%]"
              src="https://e-tuitions.com/assets/img/icons/free-demo-classes.png"
              alt="english grammer class"
            />
          </div>
          <div className="p-4">
            <p className="text-[rgb(0,35,90)] font-bold mb-2">
              Book Demo Class
            </p>
            <p className="line-clamp-2 font-medium text-black font-normal">
              Just choose your subject/ course & take a free trial class.
            </p>
          </div>
        </div>
        <div className="flex p-2 devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-600 shadow-[0px_0px_10px_rgb(0,0,0,0.1)] justify-center items-center hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300 border-[1px_solid_rgb(0,0,0,0.1)] h-[100%]">
          <div className="rounded-full p-5 w-[100%] bg-[rgb(255,242,236)] h-[100px] w-[100px]">
            <img
              className="rounded-full h-[100%] w-[100%]"
              src="https://e-tuitions.com/assets/img/icons/regional-languages.png"
              alt="class 10"
            />
          </div>
          <div className="p-4">
            <p className="text-[rgb(0,35,90)] font-bold mb-2">
              Classes in Regional Language
            </p>
            <p className="line-clamp-2 font-medium text-black font-normal">
              Find teachers who will teach you in your mother tongue.
            </p>
          </div>
        </div>
        {/* <div className="flex p-2 devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-600 shadow-[0px_0px_10px_rgb(0,0,0,0.1)] justify-center items-center hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300 border-[1px_solid_rgb(0,0,0,0.1)] h-[100%]">
          <div className="rounded-full p-5 w-[100%] bg-[rgb(255,242,236)] h-[100px] w-[100px]">
            <img
              className="rounded-full h-[100%] w-[100%]"
              src="https://e-tuitions.com/assets/img/icons/diverse-course.png"
              alt="java coding"
            />
          </div>
          <div className="p-4">
            <p className="text-[rgb(0,35,90)] font-bold mb-2">
              Diverse Courses
            </p>
            <p className="line-clamp-2 font-medium text-black font-normal">
              Coding, Foreign languages, Dance, Music. Take online classes for
              all.
            </p>
          </div>
        </div> */}
        <div className="flex p-2 devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-600 shadow-[0px_0px_10px_rgb(0,0,0,0.1)] justify-center items-center hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300 border-[1px_solid_rgb(0,0,0,0.1)] h-[100%]">
          <div className="rounded-full p-5 w-[100%] bg-[rgb(255,242,236)] h-[100px] w-[100px]">
            <img
              className="rounded-full h-[100%] w-[100%]"
              src="https://e-tuitions.com/assets/img/icons/experienced-teacher.png"
              alt="java coding"
            />
          </div>
          <div className="p-4">
            <p className="text-[rgb(0,35,90)] font-bold mb-2">
              Experienced Teachers
            </p>
            <p className="line-clamp-2 font-medium text-black font-normal">
              Take lessons from the Best Teachers in India.
            </p>
          </div>
        </div>
        <div className="flex p-2 devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-600 shadow-[0px_0px_10px_rgb(0,0,0,0.1)] justify-center items-center hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300 border-[1px_solid_rgb(0,0,0,0.1)] h-[100%]">
          <div className="rounded-full p-5 w-[100%] bg-[rgb(255,242,236)] h-[100px] w-[100px]">
            <img
              className="rounded-full h-[100%] w-[100%]"
              src="https://e-tuitions.com/assets/img/icons/student-result.png"
              alt="java coding"
            />
          </div>
          <div className="p-4">
            <p className="text-[rgb(0,35,90)] font-bold mb-2">
              Student's Results
            </p>
            <p className="line-clamp-2 font-medium text-black font-normal">
              Every student's results & reviews are important to us.
            </p>
          </div>
        </div>
      </div>

      {/* short term courses  */}
      <div className="">
        <p className="font-bold text-xl mb-5 uppercase">
          <span className="w-[10px] bg-[rgb(247,0,0)] rounded-xl">&nbsp;</span>{" "}
          Online Available Classes
        </p>
        <div className="grid justify-center place-content-around grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-5">
          <div className="flex devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-300 shadow justify-center items-center h-fit hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300">
            <div className="relative w-[100%]">
              <img
                className=" rounded-t-xl h-[200px] w-[100%]"
                src="https://e-tuitions.com/images/1640946743388.jpeg"
                alt="english grammer class"
              />
              <p className="p-2 pr-5 font-bold rounded-r-xl text-white bg-[rgb(0,35,90)] hover:bg-[rgb(0,35,90)]-100 absolute bottom-0">
                English Grammer
              </p>
            </div>
            <div className="p-4">
              <p className="line-clamp-2 font-medium text-black font-normal">
                Take english grammer classes from comfort of your home at just
                100rs per month
              </p>
            </div>
          </div>
          <div className="flex devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-300 shadow justify-center items-center h-fit hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300">
            <div className="relative w-[100%]">
              <img
                className=" rounded-t-xl h-[200px] w-[100%]"
                src="https://e-tuitions.com/images/1640946793907.jpeg"
                alt="english grammer class"
              />
              <p className="p-2 pr-5 font-bold rounded-r-xl text-white bg-[rgb(0,35,90)] hover:bg-[rgb(0,35,90)]-100 absolute bottom-0">
                Class 9 Tutions
              </p>
            </div>
            <div className="p-4">
              <p className="line-clamp-2 font-medium text-black font-normal">
                Take classes for class 9 books with comfort of your home at just
                100rs per month
              </p>
            </div>
          </div>
          <div className="flex devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-300 shadow justify-center items-center h-fit hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300">
            <div className="relative w-[100%]">
              <img
                className=" rounded-t-xl h-[200px] w-[100%]"
                src="https://e-tuitions.com/images/1640946634727.jpeg"
                alt="class 10"
              />
              <p className="p-2 pr-5 font-bold rounded-r-xl text-white bg-[rgb(0,35,90)] hover:bg-[rgb(0,35,90)]-100 absolute bottom-0">
                Class 10 Tutions
              </p>
            </div>
            <div className="p-4">
              <p className="line-clamp-2 font-medium text-black font-normal">
                Take classes for class 10 books with comfort of your home at
                just 100rs per month
              </p>
            </div>
          </div>
          <div className="flex devide bg-[rgb(253,253,253)] flex-col rounded-xl border-gray-300 shadow justify-center items-center h-fit hover:shadow-[2px_28px_12px_-12px_rgba(0,0,0,0.1)] hover:cursor-pointer hover:translate-y-[-10px] hover:origin-top duration-300">
            <div className="relative w-[100%]">
              <img
                className=" rounded-t-xl h-[200px] w-[100%]"
                src="https://e-tuitions.com/images/1642060788992.jpeg"
                alt="java coding"
              />
              <p className="p-2 pr-5 font-bold rounded-r-xl text-white bg-[rgb(0,35,90)] hover:bg-[rgb(0,35,90)]-100 absolute bottom-0">
                Coding with Java
              </p>
            </div>
            <div className="p-4">
              <p className="line-clamp-2 font-medium text-black font-normal">
                Take classes for java coding books with comfort of your home at
                just 100rs per month
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
