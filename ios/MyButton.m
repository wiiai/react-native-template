//
//  MyButton.m
//  WowImRN
//
//  Created by Xiong Gao on 2023/8/7.
//

#import "MyButton.h"

// ReactNative 封装IOS原生组件，这里编写一个测试用的组件类
@implementation MyButton

- (instancetype)init
{
    // 初始化组件
    self = [super init];
    if (self) {
        self.backgroundColor = [UIColor redColor];
    }
    
    // 创建一个文本组件
    UITextView *textView = [[UITextView alloc] initWithFrame:CGRectMake(20,20,200,40)];

    // 设置文字
    textView.text = @"IOS原生组件";

    // 设置字体大小

    [textView setFont:[UIFont systemFontOfSize:20]];

    // 添加文件组件
    [self addSubview:textView];
    
    return self;
}

@end
