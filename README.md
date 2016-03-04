# cssButtons
List of button designs with only CSS. No javascript! No images!

![site image](http://www.sottar.net/images/cssButtons.png)

## usage
When you click the your favorite button, the code appears immediately.  
[http://www.sottar.net/cssButtons/](http://www.sottar.net/cssButtons/)

## default setting

      .button {
        display: block; 
            width: 200px;
            height: 40px;
            text-align: center;
            text-decoration: none;
            line-height: 40px;
        }
        .button::before,
        .button::after {
            position: absolute;
            z-index: -1;
            display: block;
            content: '';
        }
        .button,
        .button::before,
        .button::after {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }

Please change your favorite button size, color etc.
