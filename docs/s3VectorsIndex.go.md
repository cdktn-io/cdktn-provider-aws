# `s3VectorsIndex` Submodule <a name="`s3VectorsIndex` Submodule" id="@cdktn/provider-aws.s3VectorsIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3VectorsIndex <a name="S3VectorsIndex" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index aws_s3vectors_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

s3vectorsindex.NewS3VectorsIndex(scope Construct, id *string, config S3VectorsIndexConfig) S3VectorsIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig">S3VectorsIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig">S3VectorsIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration">PutMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetMetadataConfiguration">ResetMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetadataConfiguration` <a name="PutMetadataConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration"></a>

```go
func PutMetadataConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetMetadataConfiguration` <a name="ResetMetadataConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetMetadataConfiguration"></a>

```go
func ResetMetadataConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3VectorsIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

s3vectorsindex.S3VectorsIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

s3vectorsindex.S3VectorsIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

s3vectorsindex.S3VectorsIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

s3vectorsindex.S3VectorsIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a S3VectorsIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3VectorsIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3VectorsIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the S3VectorsIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList">S3VectorsIndexEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.indexArn">IndexArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.metadataConfiguration">MetadataConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList">S3VectorsIndexMetadataConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dimensionInput">DimensionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.distanceMetricInput">DistanceMetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.metadataConfigurationInput">MetadataConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.vectorBucketNameInput">VectorBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dimension">Dimension</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.distanceMetric">DistanceMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.vectorBucketName">VectorBucketName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() S3VectorsIndexEncryptionConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList">S3VectorsIndexEncryptionConfigurationList</a>

---

##### `IndexArn`<sup>Required</sup> <a name="IndexArn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.indexArn"></a>

```go
func IndexArn() *string
```

- *Type:* *string

---

##### `MetadataConfiguration`<sup>Required</sup> <a name="MetadataConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.metadataConfiguration"></a>

```go
func MetadataConfiguration() S3VectorsIndexMetadataConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList">S3VectorsIndexMetadataConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dimensionInput"></a>

```go
func DimensionInput() *f64
```

- *Type:* *f64

---

##### `DistanceMetricInput`<sup>Optional</sup> <a name="DistanceMetricInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.distanceMetricInput"></a>

```go
func DistanceMetricInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `MetadataConfigurationInput`<sup>Optional</sup> <a name="MetadataConfigurationInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.metadataConfigurationInput"></a>

```go
func MetadataConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VectorBucketNameInput`<sup>Optional</sup> <a name="VectorBucketNameInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.vectorBucketNameInput"></a>

```go
func VectorBucketNameInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.dimension"></a>

```go
func Dimension() *f64
```

- *Type:* *f64

---

##### `DistanceMetric`<sup>Required</sup> <a name="DistanceMetric" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.distanceMetric"></a>

```go
func DistanceMetric() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VectorBucketName`<sup>Required</sup> <a name="VectorBucketName" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.vectorBucketName"></a>

```go
func VectorBucketName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3VectorsIndexConfig <a name="S3VectorsIndexConfig" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

&s3vectorsindex.S3VectorsIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataType: *string,
	Dimension: *f64,
	DistanceMetric: *string,
	IndexName: *string,
	VectorBucketName: *string,
	EncryptionConfiguration: interface{},
	MetadataConfiguration: interface{},
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#data_type S3VectorsIndex#data_type}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.dimension">Dimension</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#dimension S3VectorsIndex#dimension}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.distanceMetric">DistanceMetric</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#distance_metric S3VectorsIndex#distance_metric}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.indexName">IndexName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#index_name S3VectorsIndex#index_name}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketName">VectorBucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#vector_bucket_name S3VectorsIndex#vector_bucket_name}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#encryption_configuration S3VectorsIndex#encryption_configuration}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.metadataConfiguration">MetadataConfiguration</a></code> | <code>interface{}</code> | metadata_configuration block. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#tags S3VectorsIndex#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#data_type S3VectorsIndex#data_type}.

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.dimension"></a>

```go
Dimension *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#dimension S3VectorsIndex#dimension}.

---

##### `DistanceMetric`<sup>Required</sup> <a name="DistanceMetric" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.distanceMetric"></a>

```go
DistanceMetric *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#distance_metric S3VectorsIndex#distance_metric}.

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#index_name S3VectorsIndex#index_name}.

---

##### `VectorBucketName`<sup>Required</sup> <a name="VectorBucketName" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketName"></a>

```go
VectorBucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#vector_bucket_name S3VectorsIndex#vector_bucket_name}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#encryption_configuration S3VectorsIndex#encryption_configuration}.

---

##### `MetadataConfiguration`<sup>Optional</sup> <a name="MetadataConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.metadataConfiguration"></a>

```go
MetadataConfiguration interface{}
```

- *Type:* interface{}

metadata_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#metadata_configuration S3VectorsIndex#metadata_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#region S3VectorsIndex#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#tags S3VectorsIndex#tags}.

---

### S3VectorsIndexEncryptionConfiguration <a name="S3VectorsIndexEncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

&s3vectorsindex.S3VectorsIndexEncryptionConfiguration {
	KmsKeyArn: *string,
	SseType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#kms_key_arn S3VectorsIndex#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.sseType">SseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#sse_type S3VectorsIndex#sse_type}. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#kms_key_arn S3VectorsIndex#kms_key_arn}.

---

##### `SseType`<sup>Optional</sup> <a name="SseType" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.sseType"></a>

```go
SseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#sse_type S3VectorsIndex#sse_type}.

---

### S3VectorsIndexMetadataConfiguration <a name="S3VectorsIndexMetadataConfiguration" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

&s3vectorsindex.S3VectorsIndexMetadataConfiguration {
	NonFilterableMetadataKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.property.nonFilterableMetadataKeys">NonFilterableMetadataKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#non_filterable_metadata_keys S3VectorsIndex#non_filterable_metadata_keys}. |

---

##### `NonFilterableMetadataKeys`<sup>Required</sup> <a name="NonFilterableMetadataKeys" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.property.nonFilterableMetadataKeys"></a>

```go
NonFilterableMetadataKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_index#non_filterable_metadata_keys S3VectorsIndex#non_filterable_metadata_keys}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3VectorsIndexEncryptionConfigurationList <a name="S3VectorsIndexEncryptionConfigurationList" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

s3vectorsindex.NewS3VectorsIndexEncryptionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3VectorsIndexEncryptionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.get"></a>

```go
func Get(index *f64) S3VectorsIndexEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3VectorsIndexEncryptionConfigurationOutputReference <a name="S3VectorsIndexEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

s3vectorsindex.NewS3VectorsIndexEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3VectorsIndexEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetSseType">ResetSseType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetSseType` <a name="ResetSseType" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetSseType"></a>

```go
func ResetSseType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseTypeInput">SseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseType">SseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `SseTypeInput`<sup>Optional</sup> <a name="SseTypeInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseTypeInput"></a>

```go
func SseTypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SseType`<sup>Required</sup> <a name="SseType" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseType"></a>

```go
func SseType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3VectorsIndexMetadataConfigurationList <a name="S3VectorsIndexMetadataConfigurationList" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

s3vectorsindex.NewS3VectorsIndexMetadataConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3VectorsIndexMetadataConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.get"></a>

```go
func Get(index *f64) S3VectorsIndexMetadataConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3VectorsIndexMetadataConfigurationOutputReference <a name="S3VectorsIndexMetadataConfigurationOutputReference" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/s3vectorsindex"

s3vectorsindex.NewS3VectorsIndexMetadataConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3VectorsIndexMetadataConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeysInput">NonFilterableMetadataKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeys">NonFilterableMetadataKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NonFilterableMetadataKeysInput`<sup>Optional</sup> <a name="NonFilterableMetadataKeysInput" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeysInput"></a>

```go
func NonFilterableMetadataKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `NonFilterableMetadataKeys`<sup>Required</sup> <a name="NonFilterableMetadataKeys" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeys"></a>

```go
func NonFilterableMetadataKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



