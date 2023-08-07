package com.wowimrn;

import android.view.View;
import android.widget.Button;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

import javax.annotation.Nullable;

public class RCTButton extends SimpleViewManager<Button> {
  private ThemedReactContext mContext;
  // private static final String EVENT_NAME_ONCLICK_NATIVE = "onClick";
  private static final String EVENT_NAME_ONCLICK_NATIVE = "nativeClick";
  private static final String EVENT_NAME_ONCLICK_JS = "jsClick";

  @Override
  public String getName() {
    return "RCTButton";
  }

  @Override
  protected Button createViewInstance(ThemedReactContext reactContext) {
    this.mContext = reactContext;
    Button button = new Button(reactContext);
    return button;
  }

  @Override
  protected void addEventEmitters(final ThemedReactContext reactContext, Button view) {
    super.addEventEmitters(reactContext, view);
    view.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        WritableMap data = Arguments.createMap();
        data.putString("msg", "点击按钮");
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
            v.getId(),
            EVENT_NAME_ONCLICK_NATIVE,
            data);
      }
    });
  }

  /*
   * name="text" : name对应的值是在js代码中使用该封装组件时的属性名。
   */
  @ReactProp(name = "text")
  public void setText(Button button, String text) {
    button.setText(text);
  }

  @Nullable
  @Override
  public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
    return MapBuilder.<String, Object>builder()
        .put(
            EVENT_NAME_ONCLICK_NATIVE,
            MapBuilder.of(
                "registrationName",
                EVENT_NAME_ONCLICK_JS))
        .build();
  }
}
