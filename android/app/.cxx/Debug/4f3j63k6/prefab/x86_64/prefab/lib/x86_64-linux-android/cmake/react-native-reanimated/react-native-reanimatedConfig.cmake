if(NOT TARGET react-native-reanimated::reanimated)
add_library(react-native-reanimated::reanimated SHARED IMPORTED)
set_target_properties(react-native-reanimated::reanimated PROPERTIES
    IMPORTED_LOCATION "/Users/supan/Desktop/Supan/React_Native/MyApp/MyApp/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/2n4yc5k4/obj/x86_64/libreanimated.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/supan/Desktop/Supan/React_Native/MyApp/MyApp/node_modules/react-native-reanimated/android/build/prefab-headers/reanimated"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

