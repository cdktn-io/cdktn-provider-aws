# `defaultVpc` Submodule <a name="`defaultVpc` Submodule" id="@cdktn/provider-aws.defaultVpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultVpc <a name="DefaultVpc" id="@cdktn/provider-aws.defaultVpc.DefaultVpc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc aws_default_vpc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/defaultvpc"

defaultvpc.NewDefaultVpc(scope Construct, id *string, config DefaultVpcConfig) DefaultVpc
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig">DefaultVpcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig">DefaultVpcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetAssignGeneratedIpv6CidrBlock">ResetAssignGeneratedIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsHostnames">ResetEnableDnsHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsSupport">ResetEnableDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetEnableNetworkAddressUsageMetrics">ResetEnableNetworkAddressUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlockNetworkBorderGroup">ResetIpv6CidrBlockNetworkBorderGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetIpv6IpamPoolId">ResetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetIpv6NetmaskLength">ResetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAssignGeneratedIpv6CidrBlock` <a name="ResetAssignGeneratedIpv6CidrBlock" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetAssignGeneratedIpv6CidrBlock"></a>

```go
func ResetAssignGeneratedIpv6CidrBlock()
```

##### `ResetEnableDnsHostnames` <a name="ResetEnableDnsHostnames" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsHostnames"></a>

```go
func ResetEnableDnsHostnames()
```

##### `ResetEnableDnsSupport` <a name="ResetEnableDnsSupport" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetEnableDnsSupport"></a>

```go
func ResetEnableDnsSupport()
```

##### `ResetEnableNetworkAddressUsageMetrics` <a name="ResetEnableNetworkAddressUsageMetrics" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetEnableNetworkAddressUsageMetrics"></a>

```go
func ResetEnableNetworkAddressUsageMetrics()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlock"></a>

```go
func ResetIpv6CidrBlock()
```

##### `ResetIpv6CidrBlockNetworkBorderGroup` <a name="ResetIpv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetIpv6CidrBlockNetworkBorderGroup"></a>

```go
func ResetIpv6CidrBlockNetworkBorderGroup()
```

##### `ResetIpv6IpamPoolId` <a name="ResetIpv6IpamPoolId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetIpv6IpamPoolId"></a>

```go
func ResetIpv6IpamPoolId()
```

##### `ResetIpv6NetmaskLength` <a name="ResetIpv6NetmaskLength" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetIpv6NetmaskLength"></a>

```go
func ResetIpv6NetmaskLength()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DefaultVpc resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/defaultvpc"

defaultvpc.DefaultVpc_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/defaultvpc"

defaultvpc.DefaultVpc_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/defaultvpc"

defaultvpc.DefaultVpc_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/defaultvpc"

defaultvpc.DefaultVpc_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DefaultVpc resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DefaultVpc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DefaultVpc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DefaultVpc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.defaultNetworkAclId">DefaultNetworkAclId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.defaultRouteTableId">DefaultRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.defaultSecurityGroupId">DefaultSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.dhcpOptionsId">DhcpOptionsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.existingDefaultVpc">ExistingDefaultVpc</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.instanceTenancy">InstanceTenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6AssociationId">Ipv6AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.mainRouteTableId">MainRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.networkFirewallAssociation">NetworkFirewallAssociation</a></code> | <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList">DefaultVpcNetworkFirewallAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlockInput">AssignGeneratedIpv6CidrBlockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnamesInput">EnableDnsHostnamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupportInput">EnableDnsSupportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetricsInput">EnableNetworkAddressUsageMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroupInput">Ipv6CidrBlockNetworkBorderGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolIdInput">Ipv6IpamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLengthInput">Ipv6NetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlock">AssignGeneratedIpv6CidrBlock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnames">EnableDnsHostnames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupport">EnableDnsSupport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetrics">EnableNetworkAddressUsageMetrics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroup">Ipv6CidrBlockNetworkBorderGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `DefaultNetworkAclId`<sup>Required</sup> <a name="DefaultNetworkAclId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.defaultNetworkAclId"></a>

```go
func DefaultNetworkAclId() *string
```

- *Type:* *string

---

##### `DefaultRouteTableId`<sup>Required</sup> <a name="DefaultRouteTableId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.defaultRouteTableId"></a>

```go
func DefaultRouteTableId() *string
```

- *Type:* *string

---

##### `DefaultSecurityGroupId`<sup>Required</sup> <a name="DefaultSecurityGroupId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.defaultSecurityGroupId"></a>

```go
func DefaultSecurityGroupId() *string
```

- *Type:* *string

---

##### `DhcpOptionsId`<sup>Required</sup> <a name="DhcpOptionsId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.dhcpOptionsId"></a>

```go
func DhcpOptionsId() *string
```

- *Type:* *string

---

##### `ExistingDefaultVpc`<sup>Required</sup> <a name="ExistingDefaultVpc" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.existingDefaultVpc"></a>

```go
func ExistingDefaultVpc() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InstanceTenancy`<sup>Required</sup> <a name="InstanceTenancy" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.instanceTenancy"></a>

```go
func InstanceTenancy() *string
```

- *Type:* *string

---

##### `Ipv6AssociationId`<sup>Required</sup> <a name="Ipv6AssociationId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6AssociationId"></a>

```go
func Ipv6AssociationId() *string
```

- *Type:* *string

---

##### `MainRouteTableId`<sup>Required</sup> <a name="MainRouteTableId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.mainRouteTableId"></a>

```go
func MainRouteTableId() *string
```

- *Type:* *string

---

##### `NetworkFirewallAssociation`<sup>Required</sup> <a name="NetworkFirewallAssociation" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.networkFirewallAssociation"></a>

```go
func NetworkFirewallAssociation() DefaultVpcNetworkFirewallAssociationList
```

- *Type:* <a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList">DefaultVpcNetworkFirewallAssociationList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `AssignGeneratedIpv6CidrBlockInput`<sup>Optional</sup> <a name="AssignGeneratedIpv6CidrBlockInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlockInput"></a>

```go
func AssignGeneratedIpv6CidrBlockInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDnsHostnamesInput`<sup>Optional</sup> <a name="EnableDnsHostnamesInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnamesInput"></a>

```go
func EnableDnsHostnamesInput() interface{}
```

- *Type:* interface{}

---

##### `EnableDnsSupportInput`<sup>Optional</sup> <a name="EnableDnsSupportInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupportInput"></a>

```go
func EnableDnsSupportInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkAddressUsageMetricsInput`<sup>Optional</sup> <a name="EnableNetworkAddressUsageMetricsInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetricsInput"></a>

```go
func EnableNetworkAddressUsageMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockInput"></a>

```go
func Ipv6CidrBlockInput() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlockNetworkBorderGroupInput`<sup>Optional</sup> <a name="Ipv6CidrBlockNetworkBorderGroupInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```go
func Ipv6CidrBlockNetworkBorderGroupInput() *string
```

- *Type:* *string

---

##### `Ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv6IpamPoolIdInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolIdInput"></a>

```go
func Ipv6IpamPoolIdInput() *string
```

- *Type:* *string

---

##### `Ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv6NetmaskLengthInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLengthInput"></a>

```go
func Ipv6NetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AssignGeneratedIpv6CidrBlock`<sup>Required</sup> <a name="AssignGeneratedIpv6CidrBlock" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.assignGeneratedIpv6CidrBlock"></a>

```go
func AssignGeneratedIpv6CidrBlock() interface{}
```

- *Type:* interface{}

---

##### `EnableDnsHostnames`<sup>Required</sup> <a name="EnableDnsHostnames" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableDnsHostnames"></a>

```go
func EnableDnsHostnames() interface{}
```

- *Type:* interface{}

---

##### `EnableDnsSupport`<sup>Required</sup> <a name="EnableDnsSupport" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableDnsSupport"></a>

```go
func EnableDnsSupport() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkAddressUsageMetrics`<sup>Required</sup> <a name="EnableNetworkAddressUsageMetrics" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.enableNetworkAddressUsageMetrics"></a>

```go
func EnableNetworkAddressUsageMetrics() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlock"></a>

```go
func Ipv6CidrBlock() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="Ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6CidrBlockNetworkBorderGroup"></a>

```go
func Ipv6CidrBlockNetworkBorderGroup() *string
```

- *Type:* *string

---

##### `Ipv6IpamPoolId`<sup>Required</sup> <a name="Ipv6IpamPoolId" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6IpamPoolId"></a>

```go
func Ipv6IpamPoolId() *string
```

- *Type:* *string

---

##### `Ipv6NetmaskLength`<sup>Required</sup> <a name="Ipv6NetmaskLength" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.ipv6NetmaskLength"></a>

```go
func Ipv6NetmaskLength() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.defaultVpc.DefaultVpc.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultVpcConfig <a name="DefaultVpcConfig" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/defaultvpc"

&defaultvpc.DefaultVpcConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AssignGeneratedIpv6CidrBlock: interface{},
	EnableDnsHostnames: interface{},
	EnableDnsSupport: interface{},
	EnableNetworkAddressUsageMetrics: interface{},
	ForceDestroy: interface{},
	Id: *string,
	Ipv6CidrBlock: *string,
	Ipv6CidrBlockNetworkBorderGroup: *string,
	Ipv6IpamPoolId: *string,
	Ipv6NetmaskLength: *f64,
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.assignGeneratedIpv6CidrBlock">AssignGeneratedIpv6CidrBlock</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsHostnames">EnableDnsHostnames</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsSupport">EnableDnsSupport</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.enableNetworkAddressUsageMetrics">EnableNetworkAddressUsageMetrics</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#force_destroy DefaultVpc#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#id DefaultVpc#id}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlockNetworkBorderGroup">Ipv6CidrBlockNetworkBorderGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#tags DefaultVpc#tags}. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#tags_all DefaultVpc#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssignGeneratedIpv6CidrBlock`<sup>Optional</sup> <a name="AssignGeneratedIpv6CidrBlock" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.assignGeneratedIpv6CidrBlock"></a>

```go
AssignGeneratedIpv6CidrBlock interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#assign_generated_ipv6_cidr_block DefaultVpc#assign_generated_ipv6_cidr_block}.

---

##### `EnableDnsHostnames`<sup>Optional</sup> <a name="EnableDnsHostnames" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsHostnames"></a>

```go
EnableDnsHostnames interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}.

---

##### `EnableDnsSupport`<sup>Optional</sup> <a name="EnableDnsSupport" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.enableDnsSupport"></a>

```go
EnableDnsSupport interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#enable_dns_support DefaultVpc#enable_dns_support}.

---

##### `EnableNetworkAddressUsageMetrics`<sup>Optional</sup> <a name="EnableNetworkAddressUsageMetrics" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.enableNetworkAddressUsageMetrics"></a>

```go
EnableNetworkAddressUsageMetrics interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#enable_network_address_usage_metrics DefaultVpc#enable_network_address_usage_metrics}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#force_destroy DefaultVpc#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#id DefaultVpc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlock"></a>

```go
Ipv6CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#ipv6_cidr_block DefaultVpc#ipv6_cidr_block}.

---

##### `Ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="Ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```go
Ipv6CidrBlockNetworkBorderGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#ipv6_cidr_block_network_border_group DefaultVpc#ipv6_cidr_block_network_border_group}.

---

##### `Ipv6IpamPoolId`<sup>Optional</sup> <a name="Ipv6IpamPoolId" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6IpamPoolId"></a>

```go
Ipv6IpamPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#ipv6_ipam_pool_id DefaultVpc#ipv6_ipam_pool_id}.

---

##### `Ipv6NetmaskLength`<sup>Optional</sup> <a name="Ipv6NetmaskLength" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.ipv6NetmaskLength"></a>

```go
Ipv6NetmaskLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#ipv6_netmask_length DefaultVpc#ipv6_netmask_length}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#region DefaultVpc#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#tags DefaultVpc#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.defaultVpc.DefaultVpcConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/default_vpc#tags_all DefaultVpc#tags_all}.

---

### DefaultVpcNetworkFirewallAssociation <a name="DefaultVpcNetworkFirewallAssociation" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/defaultvpc"

&defaultvpc.DefaultVpcNetworkFirewallAssociation {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DefaultVpcNetworkFirewallAssociationList <a name="DefaultVpcNetworkFirewallAssociationList" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/defaultvpc"

defaultvpc.NewDefaultVpcNetworkFirewallAssociationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DefaultVpcNetworkFirewallAssociationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.get"></a>

```go
func Get(index *f64) DefaultVpcNetworkFirewallAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DefaultVpcNetworkFirewallAssociationOutputReference <a name="DefaultVpcNetworkFirewallAssociationOutputReference" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/defaultvpc"

defaultvpc.NewDefaultVpcNetworkFirewallAssociationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DefaultVpcNetworkFirewallAssociationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.firewallArn">FirewallArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.firewallMode">FirewallMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.firewallOnboardingStatus">FirewallOnboardingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociation">DefaultVpcNetworkFirewallAssociation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.firewallArn"></a>

```go
func FirewallArn() *string
```

- *Type:* *string

---

##### `FirewallMode`<sup>Required</sup> <a name="FirewallMode" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.firewallMode"></a>

```go
func FirewallMode() *string
```

- *Type:* *string

---

##### `FirewallOnboardingStatus`<sup>Required</sup> <a name="FirewallOnboardingStatus" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.firewallOnboardingStatus"></a>

```go
func FirewallOnboardingStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociationOutputReference.property.internalValue"></a>

```go
func InternalValue() DefaultVpcNetworkFirewallAssociation
```

- *Type:* <a href="#@cdktn/provider-aws.defaultVpc.DefaultVpcNetworkFirewallAssociation">DefaultVpcNetworkFirewallAssociation</a>

---



