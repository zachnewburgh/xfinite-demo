package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/", base)
	r.GET("/ping", pong)
	return r
}

func main() {
	r := setupRouter()
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	r.Run(fmt.Sprintf(":%s", port))
}

func base(c *gin.Context) {
	res := gin.H{"name": "xfinite-demo", "repository": "https://github.com/zachnewburgh/xfinite-demo/tree/main/go"}
	c.JSON(200, res)
}

func pong(c *gin.Context) {
	res := gin.H{"message": "pong"}
	c.JSON(200, res)
}
