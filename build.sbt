name := """java-play-angular-seed"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava).settings(
  watchSources ++= (baseDirectory.value / "ui/src" ** "*").get
)

crossScalaVersions := Seq("2.13.14", "3.3.1")
scalaVersion := crossScalaVersions.value.head

libraryDependencies += guice

// Test Database
libraryDependencies += "com.h2database" % "h2" % "2.3.232"

// Testing libraries for dealing with CompletionStage...
libraryDependencies += "org.assertj" % "assertj-core" % "3.26.3" % Test
libraryDependencies += "org.awaitility" % "awaitility" % "4.2.2" % Test

// Make verbose tests
(Test / testOptions) := Seq(Tests.Argument(TestFrameworks.JUnit, "-a", "-v"))
