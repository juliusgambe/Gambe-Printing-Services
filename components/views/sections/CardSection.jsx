import React from "react";
import WhiteSection from "./WhiteSection";
import Card from "../cards/Card";
import FlexSection from "./FlexSection";
// import data from "./CardData";
import ImageCard from "../cards/ImageCard";

export default function CardSection({ data, onClick }) {

    function onCardClick(cardData) {
        // click event for the cards
        onClick(cardData);
    }

    return (
        <>

            <FlexSection customStyle={{ alignItems: "stretch", margin: "8vh 0vh" }}>
                {
                    data.map((data) => {
                        return (
                            <Card key={data.id} hasImage={true} imageSrc={data.imageSrc} cardTitle={data.cardTitle} cardDescription={data.cardDescription} cardButtonTitle={data.cardButtonTitle} onClick={() => onCardClick(data)} />
                        )
                    })
                }
                {/* <Card imageSrc="/cards/paper.jpg" cardTitle="Hi" cardButtonTitle="Lol" cardDescription="Lorem ipsum dolor sit amet,  sapien quis feugiat feugiat, nunc sapien hendrerit velit, id tincidunt dui mi eget ipsum. Cras molestie at leo in molestie." />
                <Card cardButtonTitle="Lol" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec varius tortor. Nunc sed dolor interdum, dictum erat a, fringilla neque. Integer pharetra ex efficitur nulla pellentesque, eget faucibus nisl tempus. Suspendisse pellentesque, orci ac sollicitudin venenatis, enim ligula imperdiet lectus, sodales feugiat quam justo at eros. Maecenas est dolor, placerat vitae facilisis at, tincidunt sed lectus. Integer ut bibendum justo. Suspendisse nec magna leo. Aliquam ac ultrices libero, vel scelerisque enim. Aliquam mollis mollis ex, ac molestie nibh iaculis nec. Nulla facilisi. Phasellus mauris lacus, convallis at eros et, dignissim aliquam urna. Aenean vel nisi vitae ipsum finibus consequat sed porttitor magna. Phasellus nec diam consectetur, finibus enim et, tristique orci. Suspendisse potenti. Cras consequat, sapien quis feugiat feugiat, nunc sapien hendrerit velit, id tincidunt dui mi eget ipsum. Cras molestie at leo in molestie." />
                <Card cardButtonTitle="Lol" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec varius tortor. Nunc sed dolor interdum, dictum erat a, fringilla neque. Integer pharetra ex efficitur nulla pellentesque, eget faucibus nisl tempus. Suspendisse pellentesque, orci ac sollicitudin venenatis, enim ligula imperdiet lectus, sodales feugiat quam justo at eros. Maecenas est dolor, placerat vitae facilisis at, tincidunt sed lectus. Integer ut bibendum justo. Suspendisse nec magna leo. Aliquam ac ultrices libero, vel scelerisque enim. Aliquam mollis mollis ex, ac molestie nibh iaculis nec. Nulla facilisi. Phasellus mauris lacus, convallis at eros et, dignissim aliquam urna. Aenean vel nisi vitae ipsum finibus consequat sed porttitor magna. Phasellus nec diam consectetur, finibus enim et, tristique orci. Suspendisse potenti. Cras consequat" />
                <Card cardButtonTitle="Lol" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec varius tortor. Nunc sed dolor interdum, dictum erat a, fringilla neque. Integer pharetra ex efficitur nulla pellentesque, eget faucibus nisl tempus. Suspendisse pellentesque, orci ac sollicitudin venenatis, enim ligula imperdiet lectus, sodales feugiat quam justo at eros. Maecenas est dolor, placerat vitae facilisis at, tincidunt sed lectus. Integer ut bibendum justo. Suspendisse nec magna leo. Aliquam ac ultrices libero, vel scelerisque enim. Aliquam mollis mollis ex, ac molestie nibh iaculis nec. Nulla facilisi. Phasellus mauris lacus, convallis at eros et, dignissim aliquam urna. Aenean vel nisi vitae ipsum finibus consequat sed porttitor magna. Phasellus nec diam consectetur, finibus enim et, tristique orci. Suspendisse potenti. Cras consequat, sapien quis feugiat feugiat, nunc sapien hendrerit velit, id tincidunt dui mi eget ipsum. Cras molestie at leo in molestie." />
                <Card cardButtonTitle="Lol" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec varius tortor. Nunc sed dolor interdum, dictum erat a, fringilla neque. Integer pharetra ex efficitur nulla pellentesque, eget faucibus nisl tempus. Suspendisse pellentesque, orci ac sollicitudin venenatis, enim ligula imperdiet lectus, sodales feugiat quam justo at eros. Maecenas est dolor, placerat vitae facilisis at, tincidunt sed lectus. Integer ut bibendum justo. Suspendisse nec magna leo. Aliquam ac ultrices libero, vel scelerisque enim. Aliquam mollis mollis ex, ac molestie nibh iaculis nec. Nulla facilisi. Phasellus mauris lacus, convallis at eros et, dignissim aliquam urna. Aenean vel nisi vitae ipsum finibus consequat sed porttitor magna. Phasellus nec diam consectetur, finibus enim et, tristique orci. Suspendisse potenti. Cras consequat, sapien quis feugiat feugiat, nunc sapien hendrerit velit, id tincidunt dui mi eget ipsum. Cras molestie at leo in molestie." /> */}

            </FlexSection>
        </>
    )
}