package main

import (
    "os"

    "github.com/evanw/esbuild/pkg/api"
)

func main() {
    result := api.Build(api.BuildOptions{
        EntryPoints: []string{"src/index.ts"},
        Outfile:     "build/index.js",
				Platform:    api.PlatformNode,
				Engines: []api.Engine{
					{api.EngineNode, "10.4"},
				},
        Bundle:      true,
        Write:       true,
        LogLevel:    api.LogLevelInfo,
				External:    []string{"esbuild", "fs", "terser", "html-minifier-terser"},
    })

    if len(result.Errors) > 0 {
        os.Exit(1)
    }
}