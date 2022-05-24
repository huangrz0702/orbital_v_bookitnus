<template>
    <div class = "message-wrapper">
        <p>HEllo</p>
    </div>

</template>

<script>
export default {
    name:"welcomeMessage",
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