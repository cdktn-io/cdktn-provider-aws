# `vpcPeeringConnectionAccepter` Submodule <a name="`vpcPeeringConnectionAccepter` Submodule" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnectionAccepterA <a name="VpcPeeringConnectionAccepterA" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

vpcpeeringconnectionaccepter.NewVpcPeeringConnectionAccepterA(scope Construct, id *string, config VpcPeeringConnectionAccepterAConfig) VpcPeeringConnectionAccepterA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig">VpcPeeringConnectionAccepterAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig">VpcPeeringConnectionAccepterAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter">PutAccepter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester">PutRequester</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAccepter">ResetAccepter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAutoAccept">ResetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRequester">ResetRequester</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccepter` <a name="PutAccepter" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter"></a>

```go
func PutAccepter(value VpcPeeringConnectionAccepterAccepter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putAccepter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---

##### `PutRequester` <a name="PutRequester" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester"></a>

```go
func PutRequester(value VpcPeeringConnectionAccepterRequester)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putRequester.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts"></a>

```go
func PutTimeouts(value VpcPeeringConnectionAccepterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>

---

##### `ResetAccepter` <a name="ResetAccepter" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAccepter"></a>

```go
func ResetAccepter()
```

##### `ResetAutoAccept` <a name="ResetAutoAccept" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetAutoAccept"></a>

```go
func ResetAutoAccept()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRequester` <a name="ResetRequester" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetRequester"></a>

```go
func ResetRequester()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcPeeringConnectionAccepterA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

vpcpeeringconnectionaccepter.VpcPeeringConnectionAccepterA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

vpcpeeringconnectionaccepter.VpcPeeringConnectionAccepterA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

vpcpeeringconnectionaccepter.VpcPeeringConnectionAccepterA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

vpcpeeringconnectionaccepter.VpcPeeringConnectionAccepterA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpcPeeringConnectionAccepterA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpcPeeringConnectionAccepterA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpcPeeringConnectionAccepterA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpcPeeringConnectionAccepterA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepter">Accepter</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference">VpcPeeringConnectionAccepterAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.acceptStatus">AcceptStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerOwnerId">PeerOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerVpcId">PeerVpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requester">Requester</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference">VpcPeeringConnectionAccepterRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference">VpcPeeringConnectionAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepterInput">AccepterInput</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAcceptInput">AutoAcceptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requesterInput">RequesterInput</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionIdInput">VpcPeeringConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAccept">AutoAccept</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accepter`<sup>Required</sup> <a name="Accepter" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepter"></a>

```go
func Accepter() VpcPeeringConnectionAccepterAccepterOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference">VpcPeeringConnectionAccepterAccepterOutputReference</a>

---

##### `AcceptStatus`<sup>Required</sup> <a name="AcceptStatus" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.acceptStatus"></a>

```go
func AcceptStatus() *string
```

- *Type:* *string

---

##### `PeerOwnerId`<sup>Required</sup> <a name="PeerOwnerId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerOwnerId"></a>

```go
func PeerOwnerId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `PeerVpcId`<sup>Required</sup> <a name="PeerVpcId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.peerVpcId"></a>

```go
func PeerVpcId() *string
```

- *Type:* *string

---

##### `Requester`<sup>Required</sup> <a name="Requester" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requester"></a>

```go
func Requester() VpcPeeringConnectionAccepterRequesterOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference">VpcPeeringConnectionAccepterRequesterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeouts"></a>

```go
func Timeouts() VpcPeeringConnectionAccepterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference">VpcPeeringConnectionAccepterTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `AccepterInput`<sup>Optional</sup> <a name="AccepterInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.accepterInput"></a>

```go
func AccepterInput() VpcPeeringConnectionAccepterAccepter
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---

##### `AutoAcceptInput`<sup>Optional</sup> <a name="AutoAcceptInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAcceptInput"></a>

```go
func AutoAcceptInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RequesterInput`<sup>Optional</sup> <a name="RequesterInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.requesterInput"></a>

```go
func RequesterInput() VpcPeeringConnectionAccepterRequester
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="VpcPeeringConnectionIdInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionIdInput"></a>

```go
func VpcPeeringConnectionIdInput() *string
```

- *Type:* *string

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.autoAccept"></a>

```go
func AutoAccept() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.vpcPeeringConnectionId"></a>

```go
func VpcPeeringConnectionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionAccepterAccepter <a name="VpcPeeringConnectionAccepterAccepter" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

&vpcpeeringconnectionaccepter.VpcPeeringConnectionAccepterAccepter {
	AllowRemoteVpcDnsResolution: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}. |

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter.property.allowRemoteVpcDnsResolution"></a>

```go
AllowRemoteVpcDnsResolution interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

### VpcPeeringConnectionAccepterAConfig <a name="VpcPeeringConnectionAccepterAConfig" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

&vpcpeeringconnectionaccepter.VpcPeeringConnectionAccepterAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VpcPeeringConnectionId: *string,
	Accepter: github.com/cdktn-io/cdktn-provider-aws-go/aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter,
	AutoAccept: interface{},
	Id: *string,
	Region: *string,
	Requester: github.com/cdktn-io/cdktn-provider-aws-go/aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.vpcPeeringConnectionId">VpcPeeringConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.accepter">Accepter</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | accepter block. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.autoAccept">AutoAccept</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.requester">Requester</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | requester block. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VpcPeeringConnectionId`<sup>Required</sup> <a name="VpcPeeringConnectionId" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.vpcPeeringConnectionId"></a>

```go
VpcPeeringConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}.

---

##### `Accepter`<sup>Optional</sup> <a name="Accepter" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.accepter"></a>

```go
Accepter VpcPeeringConnectionAccepterAccepter
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#accepter VpcPeeringConnectionAccepterA#accepter}

---

##### `AutoAccept`<sup>Optional</sup> <a name="AutoAccept" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.autoAccept"></a>

```go
AutoAccept interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#region VpcPeeringConnectionAccepterA#region}

---

##### `Requester`<sup>Optional</sup> <a name="Requester" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.requester"></a>

```go
Requester VpcPeeringConnectionAccepterRequester
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

requester block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#requester VpcPeeringConnectionAccepterA#requester}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAConfig.property.timeouts"></a>

```go
Timeouts VpcPeeringConnectionAccepterTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts">VpcPeeringConnectionAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#timeouts VpcPeeringConnectionAccepterA#timeouts}

---

### VpcPeeringConnectionAccepterRequester <a name="VpcPeeringConnectionAccepterRequester" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

&vpcpeeringconnectionaccepter.VpcPeeringConnectionAccepterRequester {
	AllowRemoteVpcDnsResolution: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}. |

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester.property.allowRemoteVpcDnsResolution"></a>

```go
AllowRemoteVpcDnsResolution interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.

---

### VpcPeeringConnectionAccepterTimeouts <a name="VpcPeeringConnectionAccepterTimeouts" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

&vpcpeeringconnectionaccepter.VpcPeeringConnectionAccepterTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionAccepterAccepterOutputReference <a name="VpcPeeringConnectionAccepterAccepterOutputReference" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

vpcpeeringconnectionaccepter.NewVpcPeeringConnectionAccepterAccepterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcPeeringConnectionAccepterAccepterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```go
func ResetAllowRemoteVpcDnsResolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```go
func AllowRemoteVpcDnsResolutionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```go
func AllowRemoteVpcDnsResolution() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepterOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcPeeringConnectionAccepterAccepter
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterAccepter">VpcPeeringConnectionAccepterAccepter</a>

---


### VpcPeeringConnectionAccepterRequesterOutputReference <a name="VpcPeeringConnectionAccepterRequesterOutputReference" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

vpcpeeringconnectionaccepter.NewVpcPeeringConnectionAccepterRequesterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcPeeringConnectionAccepterRequesterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```go
func ResetAllowRemoteVpcDnsResolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```go
func AllowRemoteVpcDnsResolutionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```go
func AllowRemoteVpcDnsResolution() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequesterOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcPeeringConnectionAccepterRequester
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterRequester">VpcPeeringConnectionAccepterRequester</a>

---


### VpcPeeringConnectionAccepterTimeoutsOutputReference <a name="VpcPeeringConnectionAccepterTimeoutsOutputReference" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/vpcpeeringconnectionaccepter"

vpcpeeringconnectionaccepter.NewVpcPeeringConnectionAccepterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcPeeringConnectionAccepterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcPeeringConnectionAccepter.VpcPeeringConnectionAccepterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



