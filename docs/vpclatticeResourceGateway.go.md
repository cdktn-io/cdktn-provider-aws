# `vpclatticeResourceGateway` Submodule <a name="`vpclatticeResourceGateway` Submodule" id="@cdktn/provider-aws.vpclatticeResourceGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeResourceGateway <a name="VpclatticeResourceGateway" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway aws_vpclattice_resource_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpclatticeresourcegateway"

vpclatticeresourcegateway.NewVpclatticeResourceGateway(scope Construct, id *string, config VpclatticeResourceGatewayConfig) VpclatticeResourceGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig">VpclatticeResourceGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig">VpclatticeResourceGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetIpv4AddressesPerEni">ResetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.putTimeouts"></a>

```go
func PutTimeouts(value VpclatticeResourceGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts">VpclatticeResourceGatewayTimeouts</a>

---

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetIpv4AddressesPerEni` <a name="ResetIpv4AddressesPerEni" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetIpv4AddressesPerEni"></a>

```go
func ResetIpv4AddressesPerEni()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeResourceGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpclatticeresourcegateway"

vpclatticeresourcegateway.VpclatticeResourceGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpclatticeresourcegateway"

vpclatticeresourcegateway.VpclatticeResourceGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpclatticeresourcegateway"

vpclatticeresourcegateway.VpclatticeResourceGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpclatticeresourcegateway"

vpclatticeresourcegateway.VpclatticeResourceGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpclatticeResourceGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpclatticeResourceGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpclatticeResourceGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeResourceGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference">VpclatticeResourceGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipv4AddressesPerEniInput">Ipv4AddressesPerEniInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.timeouts"></a>

```go
func Timeouts() VpclatticeResourceGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference">VpclatticeResourceGatewayTimeoutsOutputReference</a>

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="Ipv4AddressesPerEniInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipv4AddressesPerEniInput"></a>

```go
func Ipv4AddressesPerEniInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Ipv4AddressesPerEni`<sup>Required</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipv4AddressesPerEni"></a>

```go
func Ipv4AddressesPerEni() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeResourceGatewayConfig <a name="VpclatticeResourceGatewayConfig" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpclatticeresourcegateway"

&vpclatticeresourcegateway.VpclatticeResourceGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SubnetIds: *[]*string,
	VpcId: *string,
	IpAddressType: *string,
	Ipv4AddressesPerEni: *f64,
	Region: *string,
	SecurityGroupIds: *[]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#name VpclatticeResourceGateway#name}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#subnet_ids VpclatticeResourceGateway#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#vpc_id VpclatticeResourceGateway#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#ip_address_type VpclatticeResourceGateway#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#ipv4_addresses_per_eni VpclatticeResourceGateway#ipv4_addresses_per_eni}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#security_group_ids VpclatticeResourceGateway#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#tags VpclatticeResourceGateway#tags}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts">VpclatticeResourceGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#name VpclatticeResourceGateway#name}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#subnet_ids VpclatticeResourceGateway#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#vpc_id VpclatticeResourceGateway#vpc_id}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#ip_address_type VpclatticeResourceGateway#ip_address_type}.

---

##### `Ipv4AddressesPerEni`<sup>Optional</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.ipv4AddressesPerEni"></a>

```go
Ipv4AddressesPerEni *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#ipv4_addresses_per_eni VpclatticeResourceGateway#ipv4_addresses_per_eni}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#region VpclatticeResourceGateway#region}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#security_group_ids VpclatticeResourceGateway#security_group_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#tags VpclatticeResourceGateway#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.timeouts"></a>

```go
Timeouts VpclatticeResourceGatewayTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts">VpclatticeResourceGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#timeouts VpclatticeResourceGateway#timeouts}

---

### VpclatticeResourceGatewayTimeouts <a name="VpclatticeResourceGatewayTimeouts" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpclatticeresourcegateway"

&vpclatticeresourcegateway.VpclatticeResourceGatewayTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#create VpclatticeResourceGateway#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#delete VpclatticeResourceGateway#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpclattice_resource_gateway#update VpclatticeResourceGateway#update}

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeResourceGatewayTimeoutsOutputReference <a name="VpclatticeResourceGatewayTimeoutsOutputReference" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpclatticeresourcegateway"

vpclatticeresourcegateway.NewVpclatticeResourceGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpclatticeResourceGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpclatticeResourceGateway.VpclatticeResourceGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



