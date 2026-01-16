# `vpcEncryptionControl` Submodule <a name="`vpcEncryptionControl` Submodule" id="@cdktn/provider-aws.vpcEncryptionControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEncryptionControl <a name="VpcEncryptionControl" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control aws_vpc_encryption_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControl(scope Construct, id *string, config VpcEncryptionControlConfig) VpcEncryptionControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig">VpcEncryptionControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig">VpcEncryptionControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusion">ResetEgressOnlyInternetGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetElasticFileSystemExclusion">ResetElasticFileSystemExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetInternetGatewayExclusion">ResetInternetGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetLambdaExclusion">ResetLambdaExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetNatGatewayExclusion">ResetNatGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVirtualPrivateGatewayExclusion">ResetVirtualPrivateGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcLatticeExclusion">ResetVpcLatticeExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcPeeringExclusion">ResetVpcPeeringExclusion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.putTimeouts"></a>

```go
func PutTimeouts(value VpcEncryptionControlTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

---

##### `ResetEgressOnlyInternetGatewayExclusion` <a name="ResetEgressOnlyInternetGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusion"></a>

```go
func ResetEgressOnlyInternetGatewayExclusion()
```

##### `ResetElasticFileSystemExclusion` <a name="ResetElasticFileSystemExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetElasticFileSystemExclusion"></a>

```go
func ResetElasticFileSystemExclusion()
```

##### `ResetInternetGatewayExclusion` <a name="ResetInternetGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetInternetGatewayExclusion"></a>

```go
func ResetInternetGatewayExclusion()
```

##### `ResetLambdaExclusion` <a name="ResetLambdaExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetLambdaExclusion"></a>

```go
func ResetLambdaExclusion()
```

##### `ResetNatGatewayExclusion` <a name="ResetNatGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetNatGatewayExclusion"></a>

```go
func ResetNatGatewayExclusion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualPrivateGatewayExclusion` <a name="ResetVirtualPrivateGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVirtualPrivateGatewayExclusion"></a>

```go
func ResetVirtualPrivateGatewayExclusion()
```

##### `ResetVpcLatticeExclusion` <a name="ResetVpcLatticeExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcLatticeExclusion"></a>

```go
func ResetVpcLatticeExclusion()
```

##### `ResetVpcPeeringExclusion` <a name="ResetVpcPeeringExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcPeeringExclusion"></a>

```go
func ResetVpcPeeringExclusion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcEncryptionControl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.VpcEncryptionControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.VpcEncryptionControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.VpcEncryptionControl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.VpcEncryptionControl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpcEncryptionControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpcEncryptionControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpcEncryptionControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpcEncryptionControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.resourceExclusions">ResourceExclusions</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference">VpcEncryptionControlResourceExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference">VpcEncryptionControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput">EgressOnlyInternetGatewayExclusionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusionInput">ElasticFileSystemExclusionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusionInput">InternetGatewayExclusionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusionInput">LambdaExclusionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusionInput">NatGatewayExclusionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput">VirtualPrivateGatewayExclusionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusionInput">VpcLatticeExclusionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusionInput">VpcPeeringExclusionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusion">EgressOnlyInternetGatewayExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusion">ElasticFileSystemExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusion">InternetGatewayExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusion">LambdaExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusion">NatGatewayExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusion">VirtualPrivateGatewayExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusion">VpcLatticeExclusion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusion">VpcPeeringExclusion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceExclusions`<sup>Required</sup> <a name="ResourceExclusions" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.resourceExclusions"></a>

```go
func ResourceExclusions() VpcEncryptionControlResourceExclusionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference">VpcEncryptionControlResourceExclusionsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeouts"></a>

```go
func Timeouts() VpcEncryptionControlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference">VpcEncryptionControlTimeoutsOutputReference</a>

---

##### `EgressOnlyInternetGatewayExclusionInput`<sup>Optional</sup> <a name="EgressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput"></a>

```go
func EgressOnlyInternetGatewayExclusionInput() *string
```

- *Type:* *string

---

##### `ElasticFileSystemExclusionInput`<sup>Optional</sup> <a name="ElasticFileSystemExclusionInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusionInput"></a>

```go
func ElasticFileSystemExclusionInput() *string
```

- *Type:* *string

---

##### `InternetGatewayExclusionInput`<sup>Optional</sup> <a name="InternetGatewayExclusionInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusionInput"></a>

```go
func InternetGatewayExclusionInput() *string
```

- *Type:* *string

---

##### `LambdaExclusionInput`<sup>Optional</sup> <a name="LambdaExclusionInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusionInput"></a>

```go
func LambdaExclusionInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NatGatewayExclusionInput`<sup>Optional</sup> <a name="NatGatewayExclusionInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusionInput"></a>

```go
func NatGatewayExclusionInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualPrivateGatewayExclusionInput`<sup>Optional</sup> <a name="VirtualPrivateGatewayExclusionInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput"></a>

```go
func VirtualPrivateGatewayExclusionInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `VpcLatticeExclusionInput`<sup>Optional</sup> <a name="VpcLatticeExclusionInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusionInput"></a>

```go
func VpcLatticeExclusionInput() *string
```

- *Type:* *string

---

##### `VpcPeeringExclusionInput`<sup>Optional</sup> <a name="VpcPeeringExclusionInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusionInput"></a>

```go
func VpcPeeringExclusionInput() *string
```

- *Type:* *string

---

##### `EgressOnlyInternetGatewayExclusion`<sup>Required</sup> <a name="EgressOnlyInternetGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusion"></a>

```go
func EgressOnlyInternetGatewayExclusion() *string
```

- *Type:* *string

---

##### `ElasticFileSystemExclusion`<sup>Required</sup> <a name="ElasticFileSystemExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusion"></a>

```go
func ElasticFileSystemExclusion() *string
```

- *Type:* *string

---

##### `InternetGatewayExclusion`<sup>Required</sup> <a name="InternetGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusion"></a>

```go
func InternetGatewayExclusion() *string
```

- *Type:* *string

---

##### `LambdaExclusion`<sup>Required</sup> <a name="LambdaExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusion"></a>

```go
func LambdaExclusion() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `NatGatewayExclusion`<sup>Required</sup> <a name="NatGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusion"></a>

```go
func NatGatewayExclusion() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualPrivateGatewayExclusion`<sup>Required</sup> <a name="VirtualPrivateGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusion"></a>

```go
func VirtualPrivateGatewayExclusion() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `VpcLatticeExclusion`<sup>Required</sup> <a name="VpcLatticeExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusion"></a>

```go
func VpcLatticeExclusion() *string
```

- *Type:* *string

---

##### `VpcPeeringExclusion`<sup>Required</sup> <a name="VpcPeeringExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusion"></a>

```go
func VpcPeeringExclusion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEncryptionControlConfig <a name="VpcEncryptionControlConfig" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Mode: *string,
	VpcId: *string,
	EgressOnlyInternetGatewayExclusion: *string,
	ElasticFileSystemExclusion: *string,
	InternetGatewayExclusion: *string,
	LambdaExclusion: *string,
	NatGatewayExclusion: *string,
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws.vpcEncryptionControl.VpcEncryptionControlTimeouts,
	VirtualPrivateGatewayExclusion: *string,
	VpcLatticeExclusion: *string,
	VpcPeeringExclusion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#mode VpcEncryptionControl#mode}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#vpc_id VpcEncryptionControl#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusion">EgressOnlyInternetGatewayExclusion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion VpcEncryptionControl#egress_only_internet_gateway_exclusion}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.elasticFileSystemExclusion">ElasticFileSystemExclusion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion VpcEncryptionControl#elastic_file_system_exclusion}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.internetGatewayExclusion">InternetGatewayExclusion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion VpcEncryptionControl#internet_gateway_exclusion}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lambdaExclusion">LambdaExclusion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#lambda_exclusion VpcEncryptionControl#lambda_exclusion}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.natGatewayExclusion">NatGatewayExclusion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion VpcEncryptionControl#nat_gateway_exclusion}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#tags VpcEncryptionControl#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusion">VirtualPrivateGatewayExclusion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion VpcEncryptionControl#virtual_private_gateway_exclusion}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcLatticeExclusion">VpcLatticeExclusion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion VpcEncryptionControl#vpc_lattice_exclusion}. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcPeeringExclusion">VpcPeeringExclusion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion VpcEncryptionControl#vpc_peering_exclusion}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#mode VpcEncryptionControl#mode}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#vpc_id VpcEncryptionControl#vpc_id}.

---

##### `EgressOnlyInternetGatewayExclusion`<sup>Optional</sup> <a name="EgressOnlyInternetGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusion"></a>

```go
EgressOnlyInternetGatewayExclusion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion VpcEncryptionControl#egress_only_internet_gateway_exclusion}.

---

##### `ElasticFileSystemExclusion`<sup>Optional</sup> <a name="ElasticFileSystemExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.elasticFileSystemExclusion"></a>

```go
ElasticFileSystemExclusion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion VpcEncryptionControl#elastic_file_system_exclusion}.

---

##### `InternetGatewayExclusion`<sup>Optional</sup> <a name="InternetGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.internetGatewayExclusion"></a>

```go
InternetGatewayExclusion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion VpcEncryptionControl#internet_gateway_exclusion}.

---

##### `LambdaExclusion`<sup>Optional</sup> <a name="LambdaExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lambdaExclusion"></a>

```go
LambdaExclusion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#lambda_exclusion VpcEncryptionControl#lambda_exclusion}.

---

##### `NatGatewayExclusion`<sup>Optional</sup> <a name="NatGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.natGatewayExclusion"></a>

```go
NatGatewayExclusion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion VpcEncryptionControl#nat_gateway_exclusion}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#region VpcEncryptionControl#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#tags VpcEncryptionControl#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.timeouts"></a>

```go
Timeouts VpcEncryptionControlTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#timeouts VpcEncryptionControl#timeouts}

---

##### `VirtualPrivateGatewayExclusion`<sup>Optional</sup> <a name="VirtualPrivateGatewayExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusion"></a>

```go
VirtualPrivateGatewayExclusion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion VpcEncryptionControl#virtual_private_gateway_exclusion}.

---

##### `VpcLatticeExclusion`<sup>Optional</sup> <a name="VpcLatticeExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcLatticeExclusion"></a>

```go
VpcLatticeExclusion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion VpcEncryptionControl#vpc_lattice_exclusion}.

---

##### `VpcPeeringExclusion`<sup>Optional</sup> <a name="VpcPeeringExclusion" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcPeeringExclusion"></a>

```go
VpcPeeringExclusion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion VpcEncryptionControl#vpc_peering_exclusion}.

---

### VpcEncryptionControlResourceExclusions <a name="VpcEncryptionControlResourceExclusions" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlResourceExclusions {

}
```


### VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway <a name="VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway {

}
```


### VpcEncryptionControlResourceExclusionsElasticFileSystem <a name="VpcEncryptionControlResourceExclusionsElasticFileSystem" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlResourceExclusionsElasticFileSystem {

}
```


### VpcEncryptionControlResourceExclusionsInternetGateway <a name="VpcEncryptionControlResourceExclusionsInternetGateway" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlResourceExclusionsInternetGateway {

}
```


### VpcEncryptionControlResourceExclusionsLambda <a name="VpcEncryptionControlResourceExclusionsLambda" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlResourceExclusionsLambda {

}
```


### VpcEncryptionControlResourceExclusionsNatGateway <a name="VpcEncryptionControlResourceExclusionsNatGateway" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlResourceExclusionsNatGateway {

}
```


### VpcEncryptionControlResourceExclusionsVirtualPrivateGateway <a name="VpcEncryptionControlResourceExclusionsVirtualPrivateGateway" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway {

}
```


### VpcEncryptionControlResourceExclusionsVpcLattice <a name="VpcEncryptionControlResourceExclusionsVpcLattice" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlResourceExclusionsVpcLattice {

}
```


### VpcEncryptionControlResourceExclusionsVpcPeering <a name="VpcEncryptionControlResourceExclusionsVpcPeering" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlResourceExclusionsVpcPeering {

}
```


### VpcEncryptionControlTimeouts <a name="VpcEncryptionControlTimeouts" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

&vpcencryptioncontrol.VpcEncryptionControlTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#create VpcEncryptionControl#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#delete VpcEncryptionControl#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_encryption_control#update VpcEncryptionControl#update}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a>

---


### VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference <a name="VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem">VpcEncryptionControlResourceExclusionsElasticFileSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEncryptionControlResourceExclusionsElasticFileSystem
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem">VpcEncryptionControlResourceExclusionsElasticFileSystem</a>

---


### VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway">VpcEncryptionControlResourceExclusionsInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEncryptionControlResourceExclusionsInternetGateway
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway">VpcEncryptionControlResourceExclusionsInternetGateway</a>

---


### VpcEncryptionControlResourceExclusionsLambdaOutputReference <a name="VpcEncryptionControlResourceExclusionsLambdaOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlResourceExclusionsLambdaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlResourceExclusionsLambdaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda">VpcEncryptionControlResourceExclusionsLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEncryptionControlResourceExclusionsLambda
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda">VpcEncryptionControlResourceExclusionsLambda</a>

---


### VpcEncryptionControlResourceExclusionsNatGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsNatGatewayOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlResourceExclusionsNatGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlResourceExclusionsNatGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway">VpcEncryptionControlResourceExclusionsNatGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEncryptionControlResourceExclusionsNatGateway
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway">VpcEncryptionControlResourceExclusionsNatGateway</a>

---


### VpcEncryptionControlResourceExclusionsOutputReference <a name="VpcEncryptionControlResourceExclusionsOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlResourceExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlResourceExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway">EgressOnlyInternetGateway</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem">ElasticFileSystem</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway">InternetGateway</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference">VpcEncryptionControlResourceExclusionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway">NatGateway</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway">VirtualPrivateGateway</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice">VpcLattice</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering">VpcPeering</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions">VpcEncryptionControlResourceExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressOnlyInternetGateway`<sup>Required</sup> <a name="EgressOnlyInternetGateway" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway"></a>

```go
func EgressOnlyInternetGateway() VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a>

---

##### `ElasticFileSystem`<sup>Required</sup> <a name="ElasticFileSystem" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem"></a>

```go
func ElasticFileSystem() VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a>

---

##### `InternetGateway`<sup>Required</sup> <a name="InternetGateway" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway"></a>

```go
func InternetGateway() VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.lambda"></a>

```go
func Lambda() VpcEncryptionControlResourceExclusionsLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference">VpcEncryptionControlResourceExclusionsLambdaOutputReference</a>

---

##### `NatGateway`<sup>Required</sup> <a name="NatGateway" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway"></a>

```go
func NatGateway() VpcEncryptionControlResourceExclusionsNatGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a>

---

##### `VirtualPrivateGateway`<sup>Required</sup> <a name="VirtualPrivateGateway" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway"></a>

```go
func VirtualPrivateGateway() VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a>

---

##### `VpcLattice`<sup>Required</sup> <a name="VpcLattice" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice"></a>

```go
func VpcLattice() VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a>

---

##### `VpcPeering`<sup>Required</sup> <a name="VpcPeering" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering"></a>

```go
func VpcPeering() VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEncryptionControlResourceExclusions
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions">VpcEncryptionControlResourceExclusions</a>

---


### VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEncryptionControlResourceExclusionsVirtualPrivateGateway
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a>

---


### VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference <a name="VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice">VpcEncryptionControlResourceExclusionsVpcLattice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEncryptionControlResourceExclusionsVpcLattice
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice">VpcEncryptionControlResourceExclusionsVpcLattice</a>

---


### VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference <a name="VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering">VpcEncryptionControlResourceExclusionsVpcPeering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcEncryptionControlResourceExclusionsVpcPeering
```

- *Type:* <a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering">VpcEncryptionControlResourceExclusionsVpcPeering</a>

---


### VpcEncryptionControlTimeoutsOutputReference <a name="VpcEncryptionControlTimeoutsOutputReference" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcencryptioncontrol"

vpcencryptioncontrol.NewVpcEncryptionControlTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcEncryptionControlTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



