# `rdsReservedInstance` Submodule <a name="`rdsReservedInstance` Submodule" id="@cdktn/provider-aws.rdsReservedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsReservedInstance <a name="RdsReservedInstance" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance aws_rds_reserved_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

rdsreservedinstance.NewRdsReservedInstance(scope Construct, id *string, config RdsReservedInstanceConfig) RdsReservedInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig">RdsReservedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig">RdsReservedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetReservationId">ResetReservationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts"></a>

```go
func PutTimeouts(value RdsReservedInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReservationId` <a name="ResetReservationId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetReservationId"></a>

```go
func ResetReservationId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RdsReservedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

rdsreservedinstance.RdsReservedInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

rdsreservedinstance.RdsReservedInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

rdsreservedinstance.RdsReservedInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

rdsreservedinstance.RdsReservedInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RdsReservedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RdsReservedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RdsReservedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RdsReservedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dbInstanceClass">DbInstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fixedPrice">FixedPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.leaseId">LeaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.multiAz">MultiAz</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringType">OfferingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.productDescription">ProductDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.recurringCharges">RecurringCharges</a></code> | <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList">RdsReservedInstanceRecurringChargesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference">RdsReservedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.usagePrice">UsagePrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringIdInput">OfferingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationIdInput">ReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringId">OfferingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationId">ReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `DbInstanceClass`<sup>Required</sup> <a name="DbInstanceClass" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.dbInstanceClass"></a>

```go
func DbInstanceClass() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `FixedPrice`<sup>Required</sup> <a name="FixedPrice" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.fixedPrice"></a>

```go
func FixedPrice() *f64
```

- *Type:* *f64

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.leaseId"></a>

```go
func LeaseId() *string
```

- *Type:* *string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.multiAz"></a>

```go
func MultiAz() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OfferingType`<sup>Required</sup> <a name="OfferingType" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringType"></a>

```go
func OfferingType() *string
```

- *Type:* *string

---

##### `ProductDescription`<sup>Required</sup> <a name="ProductDescription" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.productDescription"></a>

```go
func ProductDescription() *string
```

- *Type:* *string

---

##### `RecurringCharges`<sup>Required</sup> <a name="RecurringCharges" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.recurringCharges"></a>

```go
func RecurringCharges() RdsReservedInstanceRecurringChargesList
```

- *Type:* <a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList">RdsReservedInstanceRecurringChargesList</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeouts"></a>

```go
func Timeouts() RdsReservedInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference">RdsReservedInstanceTimeoutsOutputReference</a>

---

##### `UsagePrice`<sup>Required</sup> <a name="UsagePrice" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.usagePrice"></a>

```go
func UsagePrice() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `OfferingIdInput`<sup>Optional</sup> <a name="OfferingIdInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringIdInput"></a>

```go
func OfferingIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReservationIdInput`<sup>Optional</sup> <a name="ReservationIdInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationIdInput"></a>

```go
func ReservationIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.offeringId"></a>

```go
func OfferingId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReservationId`<sup>Required</sup> <a name="ReservationId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.reservationId"></a>

```go
func ReservationId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsReservedInstanceConfig <a name="RdsReservedInstanceConfig" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

&rdsreservedinstance.RdsReservedInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OfferingId: *string,
	Id: *string,
	InstanceCount: *f64,
	Region: *string,
	ReservationId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws.rdsReservedInstance.RdsReservedInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.offeringId">OfferingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#offering_id RdsReservedInstance#offering_id}. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#id RdsReservedInstance#id}. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#instance_count RdsReservedInstance#instance_count}. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.reservationId">ReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#reservation_id RdsReservedInstance#reservation_id}. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#tags RdsReservedInstance#tags}. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#tags_all RdsReservedInstance#tags_all}. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.offeringId"></a>

```go
OfferingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#offering_id RdsReservedInstance#offering_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#id RdsReservedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#instance_count RdsReservedInstance#instance_count}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#region RdsReservedInstance#region}

---

##### `ReservationId`<sup>Optional</sup> <a name="ReservationId" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.reservationId"></a>

```go
ReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#reservation_id RdsReservedInstance#reservation_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#tags RdsReservedInstance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#tags_all RdsReservedInstance#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceConfig.property.timeouts"></a>

```go
Timeouts RdsReservedInstanceTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts">RdsReservedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#timeouts RdsReservedInstance#timeouts}

---

### RdsReservedInstanceRecurringCharges <a name="RdsReservedInstanceRecurringCharges" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

&rdsreservedinstance.RdsReservedInstanceRecurringCharges {

}
```


### RdsReservedInstanceTimeouts <a name="RdsReservedInstanceTimeouts" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

&rdsreservedinstance.RdsReservedInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#create RdsReservedInstance#create}. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#delete RdsReservedInstance#delete}. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#update RdsReservedInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#create RdsReservedInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#delete RdsReservedInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_reserved_instance#update RdsReservedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsReservedInstanceRecurringChargesList <a name="RdsReservedInstanceRecurringChargesList" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

rdsreservedinstance.NewRdsReservedInstanceRecurringChargesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsReservedInstanceRecurringChargesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.get"></a>

```go
func Get(index *f64) RdsReservedInstanceRecurringChargesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RdsReservedInstanceRecurringChargesOutputReference <a name="RdsReservedInstanceRecurringChargesOutputReference" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

rdsreservedinstance.NewRdsReservedInstanceRecurringChargesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsReservedInstanceRecurringChargesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeAmount">RecurringChargeAmount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeFrequency">RecurringChargeFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges">RdsReservedInstanceRecurringCharges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecurringChargeAmount`<sup>Required</sup> <a name="RecurringChargeAmount" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeAmount"></a>

```go
func RecurringChargeAmount() *f64
```

- *Type:* *f64

---

##### `RecurringChargeFrequency`<sup>Required</sup> <a name="RecurringChargeFrequency" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.recurringChargeFrequency"></a>

```go
func RecurringChargeFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringChargesOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsReservedInstanceRecurringCharges
```

- *Type:* <a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceRecurringCharges">RdsReservedInstanceRecurringCharges</a>

---


### RdsReservedInstanceTimeoutsOutputReference <a name="RdsReservedInstanceTimeoutsOutputReference" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/rdsreservedinstance"

rdsreservedinstance.NewRdsReservedInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsReservedInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.rdsReservedInstance.RdsReservedInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



