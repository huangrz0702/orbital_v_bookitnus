<template>
    <div class="intro" style="text-align: center;">
       <h2>Hello everyone, welcome to <span style="color: olivedrab">BOOK</span><span style="color: purple">it@</span><span style="color: olivedrab">NUS!</span></h2>
       <p style="padding-left:16px">
           Let me introduce to you BOOKit@NUS, an all-in-one web application where you can enjoy all the top-notch facilities
           in NUS, without the hustle and bustle of emailing the venues one-by-one can wait for few days to get a reply.<br><br>
    
           Here, you can just perform a few clicks and you will find all the facilities you want to use: be it function room 
           or tennis court, indoor or outdoor, free or charged. You can almost book everything with ease that you are eligible 
           to book.<br><br>
        
           You will be able to see your active bookings and cancel anytime. You will also be able to view your history bookings
           and book your favourite facilities once more.
           If you have any queries about the booking, you can contact the authorities which we will provide contact details 
           as well.<br><br>
    
           Last but not least, you will be able to review the facilties and share your opnions in the forum as well. You can even
           make friends with other people of the same interest!<br><br>
    
           Now, please do not hesitate and start booking venues. Enjoy!
    
       </p>
    </div>

</template>

<script>
export default {
    name:"WelCome",
}
</script>

<style lang="scss" scoped>
.message-wrapper {
    display:flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    @media (min-width: 700px) {
        min-height: 650px;
        max-height: 650px;
        flex-direction: row;
    }


    .message-content {
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        flex: 4;
        order: 2;
        @media(min-width:700px) {
            order: 1;
        }
        @media(min-width:800px) {
            flex: 3;
        }

        div {
            max-width: 375px;
            padding: 72px 24px;
            @media (min-width: 700px) {
                padding: 0 24px;
            }

            h2 {
                font-size: 32px;
                font-weight: 300;
                text-transform: uppercase;
                margin-bottom:24px;
                @media(min-width: 700px) {
                    font-size:40px;
                }
            }

            p {
                font-size: 15px;
                font-weight: 300;
                line-height: 1.7;
            }

            .link {
                display: inline-flex;
                align-items: center;
                margin-top: 32px;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent; 

                &:hover {
                    border-bottom-color: #303030;
                }
            }

            .link-light {
                &:hover {
                    border-bottom-color: #ffff;
                }

            }


        }
    }

    .NUS-photo {
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        @media(min-width:700px) {
            order: 2;
        }
        @media(min-width:800px) {
            flex: 4;
        }

        img {
            display: block;
            width:100%;
            height: 100%;
            object-fit: cover;
        }

    }

}
</style>