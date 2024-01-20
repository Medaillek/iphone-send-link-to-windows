# iphone-send-link-to-windows
A simple express server used with Apple shortcut to send text over localhost to Windows / Linux and copy it to the clipboard

# iphone-send-link-to-computer
A simple express server used with Apple shortcut to send text over localhost to Windows / Linux text content and copy it to clipboard !


## Pré-requisite
- Node 16+
- "Shortcuts" on IOS
- Allow NodeJs to receive incoming requests in your firewall
- Set your computer to a static address in your router to avoid changing the shortcut url on every computer reboot

## Installation
- `git clone https://github.com/Medaillek/iphone-send-link-to-windows.git`
- `cd iphone-send-link-to-windows.git`
- `npm install`
- `node index.mjs`
- And voilà, server will be running on port 6666, you can change it to match the port you need

## Shortcut creation
![Final Result](https://github.com/Medaillek/iphone-send-link-to-windows/blob/main/doc/final_result.jpg)

### Steps
1. Create a share entry : \
   ![Share function](https://github.com/Medaillek/iphone-send-link-to-windows/blob/main/doc/share_entry.jpg)
3. Set share options to URL: \
   ![Share entries options](https://github.com/Medaillek/iphone-send-link-to-windows/blob/main/doc/select_share_origins.jpg)
5. Set share access from share sheet : \
   ![Access from share sheet](https://github.com/Medaillek/iphone-send-link-to-windows/blob/main/doc/select_from_where_to_share.jpg)
7. Store the url in a variable : \
   ![Variable](https://github.com/Medaillek/iphone-send-link-to-windows/blob/main/doc/add_a%20variable.jpg)
9. Create a GET URL request : \
    ![GET page content function](https://github.com/Medaillek/iphone-send-link-to-windows/blob/main/doc/get_url_content.jpg)
11. For the url, type : `http://{your_computer_local_address}:8080/?text={the_variable_containing_the url_in_the_step_4}`
12. Save and open Safari, click the share button and your shortcut should appear in the list at end. Update actions > Add the shortcut to your favs and it should be on top ! Use it !
