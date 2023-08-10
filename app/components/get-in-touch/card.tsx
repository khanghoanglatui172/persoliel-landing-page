import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Script from "next/script";
function Card() {
  return (
    <div className="w-[42%] h-[400px] flex flex-row  bg-white shadow-lg">
      {/* <div className="w-[60%] h-[100%] p-10 py-20 flex flex-col justify-between">
        <div>
          <Image
            src="/icon-facebook-lightblue.svg"
            alt="facebook-icon"
            width={20}
            height={20}
          />
        </div>
        <div>
          <p className="text-cardContent text-lg font-normal leading-7">
            “Traveling tends to magnify all human emotions.” -- Peter Hoeg,
            Danish writer of fiction #PerqSoleil #TravelPartner #LuxuryTravel
            #TravelQuote
          </p>
        </div>
        <hr className="pt-15" />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <Image
              src="/icon-like.svg"
              alt="like-icon"
              width={22}
              height={22}
            />
            <Image
              src="/icon-share.svg"
              alt="like-share"
              width={22}
              height={22}
            />
            <Image
              src="/icon-follow.svg"
              alt="like-follow"
              width={22}
              height={22}
            />
          </div>
          <div>
            <p className="text-right text-content text-[15px] font-medium leading-loose">
              {dayjs().format("MMMM DD, YYYY")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[230px] h-[100%]">
        <Image
          src="/card-image.png"
          alt="card-image"
          height={500}
          width={100}
          style={{ height: "100%", width: "100%" }}
          className="ms-2 pt-0.5"
        />
      </div> */}
      <div id="fb-root"></div>

      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v17.0&appId=743353547790761&autoLogAppEvents=1"
        nonce="2DKChiiM"
      ></Script>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/perqsoleil"
        data-tabs="timeline"
        data-width="900"
        data-height="400"
        style={{ width: "100%", height: "400px" }}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/perqsoleil"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/perqsoleil">Perq Soleil</a>
        </blockquote>
      </div>

      {/* <div
        className="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-width="380"
        data-hide-cover="false"
        data-show-facepile="false"
      ></div> */}

      {/* <iframe
        title="fb_widget"
        className="w-[42%] h-[400px]"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fperqsoleil&amp;tabs=timeline&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
          background: "pink",
        }}
        scrolling="no"
        height="100%"
        width="100%"
        frameBorder="0"
        allow="encrypted-media"
      /> */}
    </div>
  );
}

export default Card;
