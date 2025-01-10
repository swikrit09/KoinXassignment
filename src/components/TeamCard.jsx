const TeamCard = () => {
    return (
        <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
            <div>
                <div className="text-2xl text-[#0F1629] font-semibold">Team</div>
                <div className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
                    Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
                    nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
                    quam. Facilisis purus convallis quam augue.
                </div>
                <div className="">
                    <Card
                        name="John Smith"
                        des="Designation here"
                        link="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                    />
                    <Card
                        name="Elina Williams"
                        des="Designation here"
                        link="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                    />
                    <Card
                        name="John Smith"
                        des="Designation here"
                        link="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

const Card = ({ name, link, des }) => {
    return (
        <div className="md:flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6">
            <div className="justify-center flex flex-col items-center">
                <div>
                    <img className="rounded-lg w-40 h-36 object-cover  lg:w-96 lg:h-32" src={link} alt="" />
                </div>
                <div className="text-[#0F1629] text-[15px] font-semibold py-1">
                    {name}
                </div>
                <div className="text-[#788F9B] text-xs font-medium">{des}</div>
            </div>
            <div className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
                fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
                nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
                sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
                consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
                ipsum. Malesuada etiam mi gravida praesent interdu
            </div>
        </div>
    );
}

export default TeamCard;
