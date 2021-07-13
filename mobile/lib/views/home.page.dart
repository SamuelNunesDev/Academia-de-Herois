import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class HomePage extends StatelessWidget {
  final String bgImage = "assets/images/bg-login.jpg";
  final String image = "assets/images/bg-login.jpg";

  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          Container(
            alignment: Alignment.center,
            child: Image.asset(
              bgImage,
              fit: BoxFit.contain,
            ),
          ),
          Column(
            children: <Widget>[
              const SizedBox(height: 30.0),
              Expanded(
                child: Container(
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(10.0),
                    // ignore: prefer_const_literals_to_create_immutables
                    boxShadow: [
                      const BoxShadow(
                          color: Colors.black38,
                          offset: Offset(5.0, 5.0),
                          blurRadius: 5.0)
                    ],
                  ),
                  margin: const EdgeInsets.all(48.0),
                  child: Column(
                    children: <Widget>[
                      Expanded(
                        child: Container(
                          decoration: BoxDecoration(
                              image: DecorationImage(
                                image: AssetImage(image),
                                fit: BoxFit.cover,
                              ),
                              borderRadius: const BorderRadius.only(
                                topLeft: Radius.circular(10.0),
                                topRight: Radius.circular(10.0),
                              )),
                        ),
                      ),
                      const SizedBox(height: 20.0),
                      Text(
                        "Você está pronto?",
                        style: TextStyle(
                          color: Colors.grey.shade700,
                          fontSize: 20.0,
                          fontFamily: "WorkSans",
                        ),
                      ),
                      const SizedBox(height: 10.0),
                      const Text(
                        "Junte-se aos Heróis agora!\nAssista as aulas e seja também um Herói!",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 13,
                          fontFamily: "Worksans",
                        ),
                      ),
                      const SizedBox(height: 40.0),
                    ],
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 80.0),
                width: double.infinity,
                child: RaisedButton(
                  padding: const EdgeInsets.all(16.0),
                  textColor: Colors.white,
                  color: Colors.deepPurple,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(40.0)),
                  onPressed: () {},
                  child: const Text(
                    "INICIAR",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 18.0,
                      fontFamily: "Worksans",
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 50.0),
            ],
          )
        ],
      ),
    );
  }
}
