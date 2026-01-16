# `bedrockagentcoreWorkloadIdentity` Submodule <a name="`bedrockagentcoreWorkloadIdentity` Submodule" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreWorkloadIdentity <a name="BedrockagentcoreWorkloadIdentity" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_workload_identity aws_bedrockagentcore_workload_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/bedrockagentcoreworkloadidentity"

bedrockagentcoreworkloadidentity.NewBedrockagentcoreWorkloadIdentity(scope Construct, id *string, config BedrockagentcoreWorkloadIdentityConfig) BedrockagentcoreWorkloadIdentity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig">BedrockagentcoreWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig">BedrockagentcoreWorkloadIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetAllowedResourceOauth2ReturnUrls">ResetAllowedResourceOauth2ReturnUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedResourceOauth2ReturnUrls` <a name="ResetAllowedResourceOauth2ReturnUrls" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetAllowedResourceOauth2ReturnUrls"></a>

```go
func ResetAllowedResourceOauth2ReturnUrls()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreWorkloadIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/bedrockagentcoreworkloadidentity"

bedrockagentcoreworkloadidentity.BedrockagentcoreWorkloadIdentity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/bedrockagentcoreworkloadidentity"

bedrockagentcoreworkloadidentity.BedrockagentcoreWorkloadIdentity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/bedrockagentcoreworkloadidentity"

bedrockagentcoreworkloadidentity.BedrockagentcoreWorkloadIdentity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/bedrockagentcoreworkloadidentity"

bedrockagentcoreworkloadidentity.BedrockagentcoreWorkloadIdentity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BedrockagentcoreWorkloadIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreWorkloadIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreWorkloadIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_workload_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreWorkloadIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.workloadIdentityArn">WorkloadIdentityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrlsInput">AllowedResourceOauth2ReturnUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrls">AllowedResourceOauth2ReturnUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkloadIdentityArn`<sup>Required</sup> <a name="WorkloadIdentityArn" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.workloadIdentityArn"></a>

```go
func WorkloadIdentityArn() *string
```

- *Type:* *string

---

##### `AllowedResourceOauth2ReturnUrlsInput`<sup>Optional</sup> <a name="AllowedResourceOauth2ReturnUrlsInput" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrlsInput"></a>

```go
func AllowedResourceOauth2ReturnUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AllowedResourceOauth2ReturnUrls`<sup>Required</sup> <a name="AllowedResourceOauth2ReturnUrls" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.allowedResourceOauth2ReturnUrls"></a>

```go
func AllowedResourceOauth2ReturnUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreWorkloadIdentityConfig <a name="BedrockagentcoreWorkloadIdentityConfig" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/bedrockagentcoreworkloadidentity"

&bedrockagentcoreworkloadidentity.BedrockagentcoreWorkloadIdentityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowedResourceOauth2ReturnUrls: *[]*string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_workload_identity#name BedrockagentcoreWorkloadIdentity#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.allowedResourceOauth2ReturnUrls">AllowedResourceOauth2ReturnUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_workload_identity#allowed_resource_oauth2_return_urls BedrockagentcoreWorkloadIdentity#allowed_resource_oauth2_return_urls}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_workload_identity#name BedrockagentcoreWorkloadIdentity#name}.

---

##### `AllowedResourceOauth2ReturnUrls`<sup>Optional</sup> <a name="AllowedResourceOauth2ReturnUrls" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.allowedResourceOauth2ReturnUrls"></a>

```go
AllowedResourceOauth2ReturnUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_workload_identity#allowed_resource_oauth2_return_urls BedrockagentcoreWorkloadIdentity#allowed_resource_oauth2_return_urls}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentcoreWorkloadIdentity.BedrockagentcoreWorkloadIdentityConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_workload_identity#region BedrockagentcoreWorkloadIdentity#region}

---



