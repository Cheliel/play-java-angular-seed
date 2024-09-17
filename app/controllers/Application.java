package controllers;

import play.api.mvc.Rendering;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import java.io.InputStream;

public class Application extends Controller {

    private final Assets assets;

    @Inject
    public Application(Assets assets){
        this.assets = assets;
    }

    public Result index() {
        //return redirect(controllers.routes.Assets.at("index.html"));
        InputStream t;

        try{
            t = Application.class.getResourceAsStream("/indeed.html");
            return ok(t).as("text/html");
        }catch(Exception e){
            return ok("Not working !");
        }
    }
}

