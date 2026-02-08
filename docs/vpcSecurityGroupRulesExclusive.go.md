# `vpcSecurityGroupRulesExclusive` Submodule <a name="`vpcSecurityGroupRulesExclusive` Submodule" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupRulesExclusive <a name="VpcSecurityGroupRulesExclusive" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive aws_vpc_security_group_rules_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcsecuritygrouprulesexclusive"

vpcsecuritygrouprulesexclusive.NewVpcSecurityGroupRulesExclusive(scope Construct, id *string, config VpcSecurityGroupRulesExclusiveConfig) VpcSecurityGroupRulesExclusive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig">VpcSecurityGroupRulesExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig">VpcSecurityGroupRulesExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcSecurityGroupRulesExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcsecuritygrouprulesexclusive"

vpcsecuritygrouprulesexclusive.VpcSecurityGroupRulesExclusive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcsecuritygrouprulesexclusive"

vpcsecuritygrouprulesexclusive.VpcSecurityGroupRulesExclusive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcsecuritygrouprulesexclusive"

vpcsecuritygrouprulesexclusive.VpcSecurityGroupRulesExclusive_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcsecuritygrouprulesexclusive"

vpcsecuritygrouprulesexclusive.VpcSecurityGroupRulesExclusive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpcSecurityGroupRulesExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpcSecurityGroupRulesExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpcSecurityGroupRulesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpcSecurityGroupRulesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIdsInput">EgressRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIdsInput">IngressRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIds">EgressRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIds">IngressRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EgressRuleIdsInput`<sup>Optional</sup> <a name="EgressRuleIdsInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIdsInput"></a>

```go
func EgressRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IngressRuleIdsInput`<sup>Optional</sup> <a name="IngressRuleIdsInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIdsInput"></a>

```go
func IngressRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `EgressRuleIds`<sup>Required</sup> <a name="EgressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIds"></a>

```go
func EgressRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `IngressRuleIds`<sup>Required</sup> <a name="IngressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIds"></a>

```go
func IngressRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupRulesExclusiveConfig <a name="VpcSecurityGroupRulesExclusiveConfig" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/vpcsecuritygrouprulesexclusive"

&vpcsecuritygrouprulesexclusive.VpcSecurityGroupRulesExclusiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EgressRuleIds: *[]*string,
	IngressRuleIds: *[]*string,
	SecurityGroupId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.egressRuleIds">EgressRuleIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#egress_rule_ids VpcSecurityGroupRulesExclusive#egress_rule_ids}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.ingressRuleIds">IngressRuleIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#ingress_rule_ids VpcSecurityGroupRulesExclusive#ingress_rule_ids}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#security_group_id VpcSecurityGroupRulesExclusive#security_group_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EgressRuleIds`<sup>Required</sup> <a name="EgressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.egressRuleIds"></a>

```go
EgressRuleIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#egress_rule_ids VpcSecurityGroupRulesExclusive#egress_rule_ids}.

---

##### `IngressRuleIds`<sup>Required</sup> <a name="IngressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.ingressRuleIds"></a>

```go
IngressRuleIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#ingress_rule_ids VpcSecurityGroupRulesExclusive#ingress_rule_ids}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#security_group_id VpcSecurityGroupRulesExclusive#security_group_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#region VpcSecurityGroupRulesExclusive#region}

---



