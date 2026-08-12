function startBrowser ()
{
    let name = "chrome";
    function installBrowser()
    {
        console.log(name);
    } return installBrowser;
}

const runTC = startBrowser();
runTC ();
