# `cloudfrontTrustStore` Submodule <a name="`cloudfrontTrustStore` Submodule" id="@cdktn/provider-aws.cloudfrontTrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontTrustStore <a name="CloudfrontTrustStore" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store aws_cloudfront_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.NewCloudfrontTrustStore(scope Construct, id *string, config CloudfrontTrustStoreConfig) CloudfrontTrustStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig">CloudfrontTrustStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig">CloudfrontTrustStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putCaCertificatesBundleSource">PutCaCertificatesBundleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetCaCertificatesBundleSource">ResetCaCertificatesBundleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCaCertificatesBundleSource` <a name="PutCaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putCaCertificatesBundleSource"></a>

```go
func PutCaCertificatesBundleSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putCaCertificatesBundleSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putTimeouts"></a>

```go
func PutTimeouts(value CloudfrontTrustStoreTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a>

---

##### `ResetCaCertificatesBundleSource` <a name="ResetCaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetCaCertificatesBundleSource"></a>

```go
func ResetCaCertificatesBundleSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontTrustStore resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.CloudfrontTrustStore_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.CloudfrontTrustStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.CloudfrontTrustStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.CloudfrontTrustStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudfrontTrustStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudfrontTrustStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudfrontTrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontTrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSource">CaCertificatesBundleSource</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList">CloudfrontTrustStoreCaCertificatesBundleSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.numberOfCaCertificates">NumberOfCaCertificates</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference">CloudfrontTrustStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSourceInput">CaCertificatesBundleSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CaCertificatesBundleSource`<sup>Required</sup> <a name="CaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSource"></a>

```go
func CaCertificatesBundleSource() CloudfrontTrustStoreCaCertificatesBundleSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList">CloudfrontTrustStoreCaCertificatesBundleSourceList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NumberOfCaCertificates`<sup>Required</sup> <a name="NumberOfCaCertificates" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.numberOfCaCertificates"></a>

```go
func NumberOfCaCertificates() *f64
```

- *Type:* *f64

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.timeouts"></a>

```go
func Timeouts() CloudfrontTrustStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference">CloudfrontTrustStoreTimeoutsOutputReference</a>

---

##### `CaCertificatesBundleSourceInput`<sup>Optional</sup> <a name="CaCertificatesBundleSourceInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSourceInput"></a>

```go
func CaCertificatesBundleSourceInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontTrustStoreCaCertificatesBundleSource <a name="CloudfrontTrustStoreCaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

&cloudfronttruststore.CloudfrontTrustStoreCaCertificatesBundleSource {
	CaCertificatesBundleS3Location: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource.property.caCertificatesBundleS3Location">CaCertificatesBundleS3Location</a></code> | <code>interface{}</code> | ca_certificates_bundle_s3_location block. |

---

##### `CaCertificatesBundleS3Location`<sup>Optional</sup> <a name="CaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource.property.caCertificatesBundleS3Location"></a>

```go
CaCertificatesBundleS3Location interface{}
```

- *Type:* interface{}

ca_certificates_bundle_s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#ca_certificates_bundle_s3_location CloudfrontTrustStore#ca_certificates_bundle_s3_location}

---

### CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location <a name="CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

&cloudfronttruststore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location {
	Bucket: *string,
	Key: *string,
	Region: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#bucket CloudfrontTrustStore#bucket}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#key CloudfrontTrustStore#key}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#region CloudfrontTrustStore#region}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#version CloudfrontTrustStore#version}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#bucket CloudfrontTrustStore#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#key CloudfrontTrustStore#key}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#region CloudfrontTrustStore#region}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#version CloudfrontTrustStore#version}.

---

### CloudfrontTrustStoreConfig <a name="CloudfrontTrustStoreConfig" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

&cloudfronttruststore.CloudfrontTrustStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CaCertificatesBundleSource: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#name CloudfrontTrustStore#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.caCertificatesBundleSource">CaCertificatesBundleSource</a></code> | <code>interface{}</code> | ca_certificates_bundle_source block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#tags CloudfrontTrustStore#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#name CloudfrontTrustStore#name}.

---

##### `CaCertificatesBundleSource`<sup>Optional</sup> <a name="CaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.caCertificatesBundleSource"></a>

```go
CaCertificatesBundleSource interface{}
```

- *Type:* interface{}

ca_certificates_bundle_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#ca_certificates_bundle_source CloudfrontTrustStore#ca_certificates_bundle_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#tags CloudfrontTrustStore#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.timeouts"></a>

```go
Timeouts CloudfrontTrustStoreTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#timeouts CloudfrontTrustStore#timeouts}

---

### CloudfrontTrustStoreTimeouts <a name="CloudfrontTrustStoreTimeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

&cloudfronttruststore.CloudfrontTrustStoreTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#create CloudfrontTrustStore#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#delete CloudfrontTrustStore#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_trust_store#update CloudfrontTrustStore#update}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList <a name="CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.NewCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.get"></a>

```go
func Get(index *f64) CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference <a name="CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.NewCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontTrustStoreCaCertificatesBundleSourceList <a name="CloudfrontTrustStoreCaCertificatesBundleSourceList" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.NewCloudfrontTrustStoreCaCertificatesBundleSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontTrustStoreCaCertificatesBundleSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.get"></a>

```go
func Get(index *f64) CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference <a name="CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.NewCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.putCaCertificatesBundleS3Location">PutCaCertificatesBundleS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resetCaCertificatesBundleS3Location">ResetCaCertificatesBundleS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaCertificatesBundleS3Location` <a name="PutCaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.putCaCertificatesBundleS3Location"></a>

```go
func PutCaCertificatesBundleS3Location(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.putCaCertificatesBundleS3Location.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCaCertificatesBundleS3Location` <a name="ResetCaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resetCaCertificatesBundleS3Location"></a>

```go
func ResetCaCertificatesBundleS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3Location">CaCertificatesBundleS3Location</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3LocationInput">CaCertificatesBundleS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertificatesBundleS3Location`<sup>Required</sup> <a name="CaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3Location"></a>

```go
func CaCertificatesBundleS3Location() CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList</a>

---

##### `CaCertificatesBundleS3LocationInput`<sup>Optional</sup> <a name="CaCertificatesBundleS3LocationInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3LocationInput"></a>

```go
func CaCertificatesBundleS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontTrustStoreTimeoutsOutputReference <a name="CloudfrontTrustStoreTimeoutsOutputReference" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/cloudfronttruststore"

cloudfronttruststore.NewCloudfrontTrustStoreTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontTrustStoreTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



