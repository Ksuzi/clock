
        const secondHand = document.querySelector('.sec-hand');
        const minuteHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');

        function setDate(){
            const now = new Date();
            const seconds = now.getSeconds();
            if (seconds == 0){
                secondHand.style.transition = `none`;
            }
            else if (seconds == 1){
                secondHand.style.transition = `all 0.05s cubic-bezier(0, 2.53, 0.58, 1)`;
            }
            var secondsDegrees = ((seconds/60)*360) + 90;
            secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
                        
            const minutes = now.getMinutes();
            if (minutes == 0){
                minuteHand.style.transition = `none`;
            }
            const minutesDegrees = ((minutes/60)*360) + 90;
            minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

            const hours = now.getHours();
            if (hours == 0){
                hourHand.style.transition = `none`;
            }
            const hoursDegrees = ((hours/12)*360) + 90;
            hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
        }

        setInterval(setDate, 1000);