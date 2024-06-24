import threedots from "../../assets/images/threedots.png";
import eyeicon from "../../assets/images/eyeicon.png";
import share from "../../assets/images/share.png";
import share2 from "../../assets/images/share2.png";

const PostComponent = ({
  image,
  type,
  query,
  solution,
  profile_pic,
  profile_name,
  android,
}) => {
  return (
    <div className="postsDiv flex flex-col w-[43.25rem]  max-w-full max-h-full border border-gray-300 rounded-md m-4">
      <div className="w-full ">
        <img
          src={image}
          alt={image}
          className="w-full h-[13.75rem] object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-center gap-[1vh]">
        <h5>{type} </h5>
        <div className="flex justify-between items-start">
          <h4 className="text-[1.375rem] font-semibold tracking-tighter w-[80%]">
            {query}
          </h4>
          <img src={threedots} alt="" />
        </div>
        <p className="pb-6 text-[1.1rem] tracking-tight text-[#5C5C5C]">
          {solution}
        </p>
        <div className="flex justify-between profileSection">
          {!android ? (
            <>
              <div className="flexprop gap-2">
                <div>
                  <img src={profile_pic} alt={profile_name} />{" "}
                </div>
                <h4 className="text-[1.125rem] font-semibold">
                  {profile_name}
                </h4>
              </div>
              <div className="flexprop gap-4">
                <div className="flexprop gap-2">
                  <img src={eyeicon} alt={profile_name} />
                  1.4k views{" "}
                </div>
                <img src={share} alt="" />
              </div>
            </>
          ) : (
            <>
           <div className="flexprop gap-2">
            <div>
              <img src={profile_pic} alt={profile_name} />{" "}
            </div>
            <div>
              <h4 className="text-[1.125rem] font-semibold">{profile_name}</h4>
              <h5 className="text-[#495057] text-[0.86rem]"> 1.4k views </h5>
            </div>
          </div>
          <div className="flexprop gap-3 px-3 bg-[#EDEEF0]">
              <img src={share2} alt="" />
              <h3 className="text-lg text-[#5C5C5C] font-medium">Share</h3>
          </div>
            </>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
