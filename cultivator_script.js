const scriptURL = 'https://script.google.com/macros/s/AKfycbz9G-RBb20aZzzSuwWBVLY3rtbrhEWLDq4clTYtt1Fds-ttKC4/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Successfully submited "))
                .catch(error => console.error('Error!', error.message))
            })

            function Reset(){
                document.getElementById("Form").reset();
            }



            function display_c() {
                var refresh = 1000; 
                mytime = setTimeout('display_ct()', refresh)
            }
        
            function display_ct() {
                var today = new Date();
                var date = today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear();
                document.getElementById("currentDate").value = date;
        
                var hrs = today.getHours();
                var ap=today.getHours();
                var text='am';
                if (hrs == 13) {
                    hrs = 1;
                }
                else if (hrs == 14) {
                    hrs = 2;
                } else if (hrs == 15) {
                    hrs = 3;
                }
                else if (hrs == 16) {
                    hrs = 4;
                }
                else if (hrs == 17) {
                    hrs = 5;
                }
                else if (hrs == 18) {
                    hrs = 6;
                }
                else if (hrs == 19) {
                    hrs = 7;
                }
                else if (hrs == 20) {
                    hrs = 8;
                }
                else if (hrs == 21) {
                    hrs = 9;
                }
                else if (hrs == 22) {
                    hrs = 10;
                }
                else if (hrs == 23) {
                    hrs = 11;
                }
                else if (hrs == 24) {
                    hrs = 12;
                }
                else{
                    hrs=hrs;
                }
                if(ap>12){
                    text='pm';
                }
        
                var time = hrs + ' : ' + today.getMinutes() + " : " + text;
                document.getElementById("currentTime").value = time;
                display_c();
            }
        
