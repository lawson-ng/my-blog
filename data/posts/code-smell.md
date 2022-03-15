# Code Smell

## Code smell là gì ?

> A code smell is a surface indication that usually corresponds to a deeper problem in the system - Martin Fowler

Code smell không phải là một điều hoàn toàn sai hay cần phải chỉnh sửa ngay lập tức. Tuy nhiên, nó là một dấu hiệu về một điều mà có thể cần phải cải tiến.

Ví dụ, khi chúng ta làm việc với một phương thức quá dài (long method), ngay lập tức chúng ta có thể nghĩ rằng phương thức này có vấn đề hoặc chúng ta có thể cải tiến nó, viết ngắn gọn hơn chẳng hạn. Chúng ta "ngửi" được một "code smell". 

Tuy nhiên, như đã nói ở trên, không phải code smell sẽ luôn luôn tạo ra vấn đề. Đôi khi một phương thức tương đối dài cũng là chấp nhận được. Để biết được đoạn code chúng ta nghĩ là code smell thực sự có vấn đề không thì ta cần phải nghiên cứu thêm về nó, cách thức nó hoạt động, cách thức tổ chức, thiết kế, ...

Như vậy, về bản chất code smell không phải là một vấn đề cần phải giải quyết mà có thể xem code smell như một công cụ giúp ta phát hiện được những vấn đề có thể xảy ra.



## Những loại code smell thường gặp

### Long methods

Là những method chứa rất nhiều dòng code. Thông thường, một method có hơn 10 dòng code đã khiến chúng ta cần phải quan tâm đến nó hơn.

**Lý do :**

- **Long method thường rất khó để đọc**: Thông thường, chúng ta cần phải đọc mọi dòng code của một phương thức để có thể hiểu được nó. Hơn nữa, không phải lúc nào việc đọc code cũng có thể giúp chúng ta hiểu rõ được method đó hoạt động như thế nào, chúng ta cần phải tạo ra những comment để giải thích thêm về mục đích của đoạn code đó. Chính vì vậy, một method quá dài khiến việc hiểu nó trở nên cực kì khó khăn.

- **Code thực hiện quá nhiều mục đích**: Chữ **S** trong quy tắc **SOLID** đại diện cho cụm từ Single Responsibility Principle, nghĩa là một đoạn code hoặc một method chỉ nên thực hiện một nhiệm vụ. Những method quá dài thường sẽ thực hiện khá nhiều nhiệm vụ bên trong nó, điều này khiến việc mở rộng hoặc bảo trì trở nên khó khăn và phức tạp hơn. Vì khi thay đổi ở một chỗ dẫn đến việc cần phải thay đổi ở nhiều chỗ khác.
  
  

**Cách cải thiện:**

Thông thường khi bạn cảm thấy cần thêm một số comment vào để giải thích về một đoạn code thì bạn có lẻ nên tạo riêng một method cho đoạn code đó. Kể cả khi bạn cần giải thích chỉ cho một dòng code bạn cũng nên tạo một method mới cho nó. 












