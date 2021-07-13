import 'package:flutter/material.dart';
import 'package:app/views/login.page.dart';
import 'package:app/views/landing.page.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Projeto de Estudo',
      theme: ThemeData(
        primaryColor: Colors.deepPurple,
      ),
      home: const LoginPage(),
    );
  }
}
