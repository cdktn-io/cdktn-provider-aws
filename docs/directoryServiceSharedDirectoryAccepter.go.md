# `directoryServiceSharedDirectoryAccepter` Submodule <a name="`directoryServiceSharedDirectoryAccepter` Submodule" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceSharedDirectoryAccepter <a name="DirectoryServiceSharedDirectoryAccepter" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter aws_directory_service_shared_directory_accepter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/directoryserviceshareddirectoryaccepter"

directoryserviceshareddirectoryaccepter.NewDirectoryServiceSharedDirectoryAccepter(scope Construct, id *string, config DirectoryServiceSharedDirectoryAccepterConfig) DirectoryServiceSharedDirectoryAccepter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig">DirectoryServiceSharedDirectoryAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig">DirectoryServiceSharedDirectoryAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.putTimeouts"></a>

```go
func PutTimeouts(value DirectoryServiceSharedDirectoryAccepterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DirectoryServiceSharedDirectoryAccepter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/directoryserviceshareddirectoryaccepter"

directoryserviceshareddirectoryaccepter.DirectoryServiceSharedDirectoryAccepter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/directoryserviceshareddirectoryaccepter"

directoryserviceshareddirectoryaccepter.DirectoryServiceSharedDirectoryAccepter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/directoryserviceshareddirectoryaccepter"

directoryserviceshareddirectoryaccepter.DirectoryServiceSharedDirectoryAccepter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/directoryserviceshareddirectoryaccepter"

directoryserviceshareddirectoryaccepter.DirectoryServiceSharedDirectoryAccepter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DirectoryServiceSharedDirectoryAccepter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectoryServiceSharedDirectoryAccepter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectoryServiceSharedDirectoryAccepter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DirectoryServiceSharedDirectoryAccepter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.ownerDirectoryId">OwnerDirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference">DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.sharedDirectoryIdInput">SharedDirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.sharedDirectoryId">SharedDirectoryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `OwnerDirectoryId`<sup>Required</sup> <a name="OwnerDirectoryId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.ownerDirectoryId"></a>

```go
func OwnerDirectoryId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.timeouts"></a>

```go
func Timeouts() DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference">DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SharedDirectoryIdInput`<sup>Optional</sup> <a name="SharedDirectoryIdInput" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.sharedDirectoryIdInput"></a>

```go
func SharedDirectoryIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SharedDirectoryId`<sup>Required</sup> <a name="SharedDirectoryId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.sharedDirectoryId"></a>

```go
func SharedDirectoryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceSharedDirectoryAccepterConfig <a name="DirectoryServiceSharedDirectoryAccepterConfig" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/directoryserviceshareddirectoryaccepter"

&directoryserviceshareddirectoryaccepter.DirectoryServiceSharedDirectoryAccepterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SharedDirectoryId: *string,
	Id: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.sharedDirectoryId">SharedDirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#shared_directory_id DirectoryServiceSharedDirectoryAccepter#shared_directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#id DirectoryServiceSharedDirectoryAccepter#id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SharedDirectoryId`<sup>Required</sup> <a name="SharedDirectoryId" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.sharedDirectoryId"></a>

```go
SharedDirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#shared_directory_id DirectoryServiceSharedDirectoryAccepter#shared_directory_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#id DirectoryServiceSharedDirectoryAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#region DirectoryServiceSharedDirectoryAccepter#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterConfig.property.timeouts"></a>

```go
Timeouts DirectoryServiceSharedDirectoryAccepterTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts">DirectoryServiceSharedDirectoryAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#timeouts DirectoryServiceSharedDirectoryAccepter#timeouts}

---

### DirectoryServiceSharedDirectoryAccepterTimeouts <a name="DirectoryServiceSharedDirectoryAccepterTimeouts" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/directoryserviceshareddirectoryaccepter"

&directoryserviceshareddirectoryaccepter.DirectoryServiceSharedDirectoryAccepterTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#create DirectoryServiceSharedDirectoryAccepter#create}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#delete DirectoryServiceSharedDirectoryAccepter#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#create DirectoryServiceSharedDirectoryAccepter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter#delete DirectoryServiceSharedDirectoryAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference <a name="DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/directoryserviceshareddirectoryaccepter"

directoryserviceshareddirectoryaccepter.NewDirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.directoryServiceSharedDirectoryAccepter.DirectoryServiceSharedDirectoryAccepterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



