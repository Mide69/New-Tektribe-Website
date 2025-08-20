import Image from "next/image";

const TeamMember = ({ title, designation, image }) => {
    return (
        <div className="rn-testimonial">
            <div className="testimonial-inner">
                <div className="testimonial-header">
                    <h5 className="ts-header">
                        <span className="text-color-primary">{title}</span>{" "}
                        {designation && <>{designation}</>}
                    </h5>
                </div>
                <div className="testimonial-body">
                    {image?.src && (
                        <div className="team-thumbnail">
                            <Image src={image.src} alt={title} width={300} height={300} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamMember;