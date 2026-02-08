# `vpcEndpointConnectionNotification` Submodule <a name="`vpcEndpointConnectionNotification` Submodule" id="@cdktn/provider-aws.vpcEndpointConnectionNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointConnectionNotification <a name="VpcEndpointConnectionNotification" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification aws_vpc_endpoint_connection_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcendpointconnectionnotification"

vpcendpointconnectionnotification.NewVpcEndpointConnectionNotification(scope Construct, id *string, config VpcEndpointConnectionNotificationConfig) VpcEndpointConnectionNotification
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig">VpcEndpointConnectionNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig">VpcEndpointConnectionNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointServiceId">ResetVpcEndpointServiceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointId"></a>

```go
func ResetVpcEndpointId()
```

##### `ResetVpcEndpointServiceId` <a name="ResetVpcEndpointServiceId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.resetVpcEndpointServiceId"></a>

```go
func ResetVpcEndpointServiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcEndpointConnectionNotification resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcendpointconnectionnotification"

vpcendpointconnectionnotification.VpcEndpointConnectionNotification_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcendpointconnectionnotification"

vpcendpointconnectionnotification.VpcEndpointConnectionNotification_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcendpointconnectionnotification"

vpcendpointconnectionnotification.VpcEndpointConnectionNotification_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcendpointconnectionnotification"

vpcendpointconnectionnotification.VpcEndpointConnectionNotification_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpcEndpointConnectionNotification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpcEndpointConnectionNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpcEndpointConnectionNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpcEndpointConnectionNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.notificationType">NotificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEventsInput">ConnectionEventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArnInput">ConnectionNotificationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceIdInput">VpcEndpointServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEvents">ConnectionEvents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArn">ConnectionNotificationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.notificationType"></a>

```go
func NotificationType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ConnectionEventsInput`<sup>Optional</sup> <a name="ConnectionEventsInput" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEventsInput"></a>

```go
func ConnectionEventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionNotificationArnInput`<sup>Optional</sup> <a name="ConnectionNotificationArnInput" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArnInput"></a>

```go
func ConnectionNotificationArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointIdInput"></a>

```go
func VpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `VpcEndpointServiceIdInput`<sup>Optional</sup> <a name="VpcEndpointServiceIdInput" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceIdInput"></a>

```go
func VpcEndpointServiceIdInput() *string
```

- *Type:* *string

---

##### `ConnectionEvents`<sup>Required</sup> <a name="ConnectionEvents" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionEvents"></a>

```go
func ConnectionEvents() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionNotificationArn`<sup>Required</sup> <a name="ConnectionNotificationArn" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.connectionNotificationArn"></a>

```go
func ConnectionNotificationArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcEndpointServiceId`<sup>Required</sup> <a name="VpcEndpointServiceId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.vpcEndpointServiceId"></a>

```go
func VpcEndpointServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotification.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointConnectionNotificationConfig <a name="VpcEndpointConnectionNotificationConfig" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcendpointconnectionnotification"

&vpcendpointconnectionnotification.VpcEndpointConnectionNotificationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionEvents: *[]*string,
	ConnectionNotificationArn: *string,
	Id: *string,
	Region: *string,
	VpcEndpointId: *string,
	VpcEndpointServiceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionEvents">ConnectionEvents</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#connection_events VpcEndpointConnectionNotification#connection_events}. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn">ConnectionNotificationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#connection_notification_arn VpcEndpointConnectionNotification#connection_notification_arn}. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#id VpcEndpointConnectionNotification#id}. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#vpc_endpoint_id VpcEndpointConnectionNotification#vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointServiceId">VpcEndpointServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#vpc_endpoint_service_id VpcEndpointConnectionNotification#vpc_endpoint_service_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionEvents`<sup>Required</sup> <a name="ConnectionEvents" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionEvents"></a>

```go
ConnectionEvents *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#connection_events VpcEndpointConnectionNotification#connection_events}.

---

##### `ConnectionNotificationArn`<sup>Required</sup> <a name="ConnectionNotificationArn" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn"></a>

```go
ConnectionNotificationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#connection_notification_arn VpcEndpointConnectionNotification#connection_notification_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#id VpcEndpointConnectionNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#region VpcEndpointConnectionNotification#region}

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointId"></a>

```go
VpcEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#vpc_endpoint_id VpcEndpointConnectionNotification#vpc_endpoint_id}.

---

##### `VpcEndpointServiceId`<sup>Optional</sup> <a name="VpcEndpointServiceId" id="@cdktn/provider-aws.vpcEndpointConnectionNotification.VpcEndpointConnectionNotificationConfig.property.vpcEndpointServiceId"></a>

```go
VpcEndpointServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_endpoint_connection_notification#vpc_endpoint_service_id VpcEndpointConnectionNotification#vpc_endpoint_service_id}.

---



