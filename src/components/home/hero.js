import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 :) 채은입니다.
          <br className="hidden lg:inline-block" />
          오늘도 열심히!
        </h1>
        <p className="mb-8 leading-relaxed">
          그들을 천하를 구할 많이 그들에게 만천하의 있는가? 우리 따뜻한 예수는
          발휘하기 황금시대를 듣는다. 트고, 소금이라 이상이 위하여서. 황금시대를
          얼마나 것이 생생하며, 웅대한 얼음에 청춘 뿐이다. 피는 하는 가는 군영과
          무엇을 위하여서. 온갖 이 꽃이 할지라도 트고, 사막이다. 든 대한
          풍부하게 가치를 때문이다. 있음으로써 열락의 목숨이 돋고, 피는 위하여
          무엇을 있으랴? 우리의 같이, 트고, 인생에 오직 있는 그것은 것이다.
          장식하는 풀밭에 끓는 피어나기 이것이야말로 놀이 용감하고 같으며,
          타오르고 위하여서.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="btn-project">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
