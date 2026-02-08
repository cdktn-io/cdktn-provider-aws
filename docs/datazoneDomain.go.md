# `datazoneDomain` Submodule <a name="`datazoneDomain` Submodule" id="@cdktn/provider-aws.datazoneDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneDomain <a name="DatazoneDomain" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain aws_datazone_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

datazonedomain.NewDatazoneDomain(scope Construct, id *string, config DatazoneDomainConfig) DatazoneDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig">DatazoneDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig">DatazoneDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.putSingleSignOn">PutSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetDomainVersion">ResetDomainVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetServiceRole">ResetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetSingleSignOn">ResetSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetSkipDeletionCheck">ResetSkipDeletionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSingleSignOn` <a name="PutSingleSignOn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.putSingleSignOn"></a>

```go
func PutSingleSignOn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.putSingleSignOn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.putTimeouts"></a>

```go
func PutTimeouts(value DatazoneDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainVersion` <a name="ResetDomainVersion" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetDomainVersion"></a>

```go
func ResetDomainVersion()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetKmsKeyIdentifier"></a>

```go
func ResetKmsKeyIdentifier()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceRole` <a name="ResetServiceRole" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetServiceRole"></a>

```go
func ResetServiceRole()
```

##### `ResetSingleSignOn` <a name="ResetSingleSignOn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetSingleSignOn"></a>

```go
func ResetSingleSignOn()
```

##### `ResetSkipDeletionCheck` <a name="ResetSkipDeletionCheck" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetSkipDeletionCheck"></a>

```go
func ResetSkipDeletionCheck()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

datazonedomain.DatazoneDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

datazonedomain.DatazoneDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

datazonedomain.DatazoneDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

datazonedomain.DatazoneDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatazoneDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazoneDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazoneDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.portalUrl">PortalUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.rootDomainUnitId">RootDomainUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOn">SingleSignOn</a></code> | <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList">DatazoneDomainSingleSignOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference">DatazoneDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRoleInput">DomainExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.domainVersionInput">DomainVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOnInput">SingleSignOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.skipDeletionCheckInput">SkipDeletionCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRole">DomainExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.domainVersion">DomainVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.skipDeletionCheck">SkipDeletionCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PortalUrl`<sup>Required</sup> <a name="PortalUrl" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.portalUrl"></a>

```go
func PortalUrl() *string
```

- *Type:* *string

---

##### `RootDomainUnitId`<sup>Required</sup> <a name="RootDomainUnitId" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.rootDomainUnitId"></a>

```go
func RootDomainUnitId() *string
```

- *Type:* *string

---

##### `SingleSignOn`<sup>Required</sup> <a name="SingleSignOn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOn"></a>

```go
func SingleSignOn() DatazoneDomainSingleSignOnList
```

- *Type:* <a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList">DatazoneDomainSingleSignOnList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.timeouts"></a>

```go
func Timeouts() DatazoneDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference">DatazoneDomainTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainExecutionRoleInput`<sup>Optional</sup> <a name="DomainExecutionRoleInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRoleInput"></a>

```go
func DomainExecutionRoleInput() *string
```

- *Type:* *string

---

##### `DomainVersionInput`<sup>Optional</sup> <a name="DomainVersionInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.domainVersionInput"></a>

```go
func DomainVersionInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifierInput"></a>

```go
func KmsKeyIdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.serviceRoleInput"></a>

```go
func ServiceRoleInput() *string
```

- *Type:* *string

---

##### `SingleSignOnInput`<sup>Optional</sup> <a name="SingleSignOnInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOnInput"></a>

```go
func SingleSignOnInput() interface{}
```

- *Type:* interface{}

---

##### `SkipDeletionCheckInput`<sup>Optional</sup> <a name="SkipDeletionCheckInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.skipDeletionCheckInput"></a>

```go
func SkipDeletionCheckInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainExecutionRole`<sup>Required</sup> <a name="DomainExecutionRole" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRole"></a>

```go
func DomainExecutionRole() *string
```

- *Type:* *string

---

##### `DomainVersion`<sup>Required</sup> <a name="DomainVersion" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.domainVersion"></a>

```go
func DomainVersion() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifier"></a>

```go
func KmsKeyIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

##### `SkipDeletionCheck`<sup>Required</sup> <a name="SkipDeletionCheck" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.skipDeletionCheck"></a>

```go
func SkipDeletionCheck() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneDomainConfig <a name="DatazoneDomainConfig" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

&datazonedomain.DatazoneDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainExecutionRole: *string,
	Name: *string,
	Description: *string,
	DomainVersion: *string,
	KmsKeyIdentifier: *string,
	Region: *string,
	ServiceRole: *string,
	SingleSignOn: interface{},
	SkipDeletionCheck: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.datazoneDomain.DatazoneDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.domainExecutionRole">DomainExecutionRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#name DatazoneDomain#name}. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#description DatazoneDomain#description}. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.domainVersion">DomainVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#domain_version DatazoneDomain#domain_version}. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#service_role DatazoneDomain#service_role}. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.singleSignOn">SingleSignOn</a></code> | <code>interface{}</code> | single_sign_on block. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.skipDeletionCheck">SkipDeletionCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#skip_deletion_check DatazoneDomain#skip_deletion_check}. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainExecutionRole`<sup>Required</sup> <a name="DomainExecutionRole" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.domainExecutionRole"></a>

```go
DomainExecutionRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#name DatazoneDomain#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#description DatazoneDomain#description}.

---

##### `DomainVersion`<sup>Optional</sup> <a name="DomainVersion" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.domainVersion"></a>

```go
DomainVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#domain_version DatazoneDomain#domain_version}.

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.kmsKeyIdentifier"></a>

```go
KmsKeyIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#region DatazoneDomain#region}

---

##### `ServiceRole`<sup>Optional</sup> <a name="ServiceRole" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.serviceRole"></a>

```go
ServiceRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#service_role DatazoneDomain#service_role}.

---

##### `SingleSignOn`<sup>Optional</sup> <a name="SingleSignOn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.singleSignOn"></a>

```go
SingleSignOn interface{}
```

- *Type:* interface{}

single_sign_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#single_sign_on DatazoneDomain#single_sign_on}

---

##### `SkipDeletionCheck`<sup>Optional</sup> <a name="SkipDeletionCheck" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.skipDeletionCheck"></a>

```go
SkipDeletionCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#skip_deletion_check DatazoneDomain#skip_deletion_check}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainConfig.property.timeouts"></a>

```go
Timeouts DatazoneDomainTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#timeouts DatazoneDomain#timeouts}

---

### DatazoneDomainSingleSignOn <a name="DatazoneDomainSingleSignOn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

&datazonedomain.DatazoneDomainSingleSignOn {
	Type: *string,
	UserAssignment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#type DatazoneDomain#type}. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.userAssignment">UserAssignment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#user_assignment DatazoneDomain#user_assignment}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#type DatazoneDomain#type}.

---

##### `UserAssignment`<sup>Optional</sup> <a name="UserAssignment" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.userAssignment"></a>

```go
UserAssignment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#user_assignment DatazoneDomain#user_assignment}.

---

### DatazoneDomainTimeouts <a name="DatazoneDomainTimeouts" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

&datazonedomain.DatazoneDomainTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#create DatazoneDomain#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/datazone_domain#delete DatazoneDomain#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneDomainSingleSignOnList <a name="DatazoneDomainSingleSignOnList" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

datazonedomain.NewDatazoneDomainSingleSignOnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneDomainSingleSignOnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.get"></a>

```go
func Get(index *f64) DatazoneDomainSingleSignOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDomainSingleSignOnOutputReference <a name="DatazoneDomainSingleSignOnOutputReference" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

datazonedomain.NewDatazoneDomainSingleSignOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneDomainSingleSignOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetUserAssignment">ResetUserAssignment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUserAssignment` <a name="ResetUserAssignment" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetUserAssignment"></a>

```go
func ResetUserAssignment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignmentInput">UserAssignmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignment">UserAssignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserAssignmentInput`<sup>Optional</sup> <a name="UserAssignmentInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignmentInput"></a>

```go
func UserAssignmentInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserAssignment`<sup>Required</sup> <a name="UserAssignment" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignment"></a>

```go
func UserAssignment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDomainTimeoutsOutputReference <a name="DatazoneDomainTimeoutsOutputReference" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/datazonedomain"

datazonedomain.NewDatazoneDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



