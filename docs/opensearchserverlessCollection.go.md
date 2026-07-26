# `opensearchserverlessCollection` Submodule <a name="`opensearchserverlessCollection` Submodule" id="@cdktn/provider-aws.opensearchserverlessCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessCollection <a name="OpensearchserverlessCollection" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection aws_opensearchserverless_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.NewOpensearchserverlessCollection(scope Construct, id *string, config OpensearchserverlessCollectionConfig) OpensearchserverlessCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig">OpensearchserverlessCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig">OpensearchserverlessCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions">PutVectorOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName">ResetCollectionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas">ResetStandbyReplicas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions">ResetVectorOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putEncryptionConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putTimeouts"></a>

```go
func PutTimeouts(value OpensearchserverlessCollectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

---

##### `PutVectorOptions` <a name="PutVectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions"></a>

```go
func PutVectorOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.putVectorOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCollectionGroupName` <a name="ResetCollectionGroupName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetCollectionGroupName"></a>

```go
func ResetCollectionGroupName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStandbyReplicas` <a name="ResetStandbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetStandbyReplicas"></a>

```go
func ResetStandbyReplicas()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetType"></a>

```go
func ResetType()
```

##### `ResetVectorOptions` <a name="ResetVectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.resetVectorOptions"></a>

```go
func ResetVectorOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.OpensearchserverlessCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.OpensearchserverlessCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.OpensearchserverlessCollection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.OpensearchserverlessCollection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OpensearchserverlessCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchserverlessCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchserverlessCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint">CollectionEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint">DashboardEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList">OpensearchserverlessCollectionEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference">OpensearchserverlessCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions">VectorOptions</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList">OpensearchserverlessCollectionVectorOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput">CollectionGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput">StandbyReplicasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput">VectorOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName">CollectionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas">StandbyReplicas</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollectionEndpoint`<sup>Required</sup> <a name="CollectionEndpoint" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionEndpoint"></a>

```go
func CollectionEndpoint() *string
```

- *Type:* *string

---

##### `DashboardEndpoint`<sup>Required</sup> <a name="DashboardEndpoint" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.dashboardEndpoint"></a>

```go
func DashboardEndpoint() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfig"></a>

```go
func EncryptionConfig() OpensearchserverlessCollectionEncryptionConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList">OpensearchserverlessCollectionEncryptionConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeouts"></a>

```go
func Timeouts() OpensearchserverlessCollectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference">OpensearchserverlessCollectionTimeoutsOutputReference</a>

---

##### `VectorOptions`<sup>Required</sup> <a name="VectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptions"></a>

```go
func VectorOptions() OpensearchserverlessCollectionVectorOptionsList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList">OpensearchserverlessCollectionVectorOptionsList</a>

---

##### `CollectionGroupNameInput`<sup>Optional</sup> <a name="CollectionGroupNameInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupNameInput"></a>

```go
func CollectionGroupNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StandbyReplicasInput`<sup>Optional</sup> <a name="StandbyReplicasInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicasInput"></a>

```go
func StandbyReplicasInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VectorOptionsInput`<sup>Optional</sup> <a name="VectorOptionsInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.vectorOptionsInput"></a>

```go
func VectorOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `CollectionGroupName`<sup>Required</sup> <a name="CollectionGroupName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.collectionGroupName"></a>

```go
func CollectionGroupName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StandbyReplicas`<sup>Required</sup> <a name="StandbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.standbyReplicas"></a>

```go
func StandbyReplicas() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessCollectionConfig <a name="OpensearchserverlessCollectionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

&opensearchserverlesscollection.OpensearchserverlessCollectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CollectionGroupName: *string,
	Description: *string,
	EncryptionConfig: interface{},
	Region: *string,
	StandbyReplicas: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts,
	Type: *string,
	VectorOptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name">Name</a></code> | <code>*string</code> | Name of the collection. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName">CollectionGroupName</a></code> | <code>*string</code> | Name of the collection group to associate with this collection. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description">Description</a></code> | <code>*string</code> | Description of the collection. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas">StandbyReplicas</a></code> | <code>*string</code> | Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type">Type</a></code> | <code>*string</code> | Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions">VectorOptions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#name OpensearchserverlessCollection#name}

---

##### `CollectionGroupName`<sup>Optional</sup> <a name="CollectionGroupName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.collectionGroupName"></a>

```go
CollectionGroupName *string
```

- *Type:* *string

Name of the collection group to associate with this collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#collection_group_name OpensearchserverlessCollection#collection_group_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#description OpensearchserverlessCollection#description}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.encryptionConfig"></a>

```go
EncryptionConfig interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#encryption_config OpensearchserverlessCollection#encryption_config}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#region OpensearchserverlessCollection#region}

---

##### `StandbyReplicas`<sup>Optional</sup> <a name="StandbyReplicas" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.standbyReplicas"></a>

```go
StandbyReplicas *string
```

- *Type:* *string

Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#standby_replicas OpensearchserverlessCollection#standby_replicas}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#tags OpensearchserverlessCollection#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.timeouts"></a>

```go
Timeouts OpensearchserverlessCollectionTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts">OpensearchserverlessCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#timeouts OpensearchserverlessCollection#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#type OpensearchserverlessCollection#type}

---

##### `VectorOptions`<sup>Optional</sup> <a name="VectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionConfig.property.vectorOptions"></a>

```go
VectorOptions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#vector_options OpensearchserverlessCollection#vector_options}.

---

### OpensearchserverlessCollectionEncryptionConfig <a name="OpensearchserverlessCollectionEncryptionConfig" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

&opensearchserverlesscollection.OpensearchserverlessCollectionEncryptionConfig {
	AwsOwnedKey: interface{},
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey">AwsOwnedKey</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#aws_owned_key OpensearchserverlessCollection#aws_owned_key}. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#kms_key_arn OpensearchserverlessCollection#kms_key_arn}. |

---

##### `AwsOwnedKey`<sup>Optional</sup> <a name="AwsOwnedKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.awsOwnedKey"></a>

```go
AwsOwnedKey interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#aws_owned_key OpensearchserverlessCollection#aws_owned_key}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#kms_key_arn OpensearchserverlessCollection#kms_key_arn}.

---

### OpensearchserverlessCollectionTimeouts <a name="OpensearchserverlessCollectionTimeouts" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

&opensearchserverlesscollection.OpensearchserverlessCollectionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#create OpensearchserverlessCollection#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#delete OpensearchserverlessCollection#delete}

---

### OpensearchserverlessCollectionVectorOptions <a name="OpensearchserverlessCollectionVectorOptions" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

&opensearchserverlesscollection.OpensearchserverlessCollectionVectorOptions {
	ServerlessVectorAcceleration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#serverless_vector_acceleration OpensearchserverlessCollection#serverless_vector_acceleration}. |

---

##### `ServerlessVectorAcceleration`<sup>Optional</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptions.property.serverlessVectorAcceleration"></a>

```go
ServerlessVectorAcceleration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/opensearchserverless_collection#serverless_vector_acceleration OpensearchserverlessCollection#serverless_vector_acceleration}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessCollectionEncryptionConfigList <a name="OpensearchserverlessCollectionEncryptionConfigList" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.NewOpensearchserverlessCollectionEncryptionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchserverlessCollectionEncryptionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.get"></a>

```go
func Get(index *f64) OpensearchserverlessCollectionEncryptionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserverlessCollectionEncryptionConfigOutputReference <a name="OpensearchserverlessCollectionEncryptionConfigOutputReference" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.NewOpensearchserverlessCollectionEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchserverlessCollectionEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey">ResetAwsOwnedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsOwnedKey` <a name="ResetAwsOwnedKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetAwsOwnedKey"></a>

```go
func ResetAwsOwnedKey()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput">AwsOwnedKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey">AwsOwnedKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsOwnedKeyInput`<sup>Optional</sup> <a name="AwsOwnedKeyInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKeyInput"></a>

```go
func AwsOwnedKeyInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `AwsOwnedKey`<sup>Required</sup> <a name="AwsOwnedKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey"></a>

```go
func AwsOwnedKey() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserverlessCollectionTimeoutsOutputReference <a name="OpensearchserverlessCollectionTimeoutsOutputReference" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.NewOpensearchserverlessCollectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserverlessCollectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserverlessCollectionVectorOptionsList <a name="OpensearchserverlessCollectionVectorOptionsList" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.NewOpensearchserverlessCollectionVectorOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchserverlessCollectionVectorOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.get"></a>

```go
func Get(index *f64) OpensearchserverlessCollectionVectorOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchserverlessCollectionVectorOptionsOutputReference <a name="OpensearchserverlessCollectionVectorOptionsOutputReference" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/opensearchserverlesscollection"

opensearchserverlesscollection.NewOpensearchserverlessCollectionVectorOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchserverlessCollectionVectorOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration">ResetServerlessVectorAcceleration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServerlessVectorAcceleration` <a name="ResetServerlessVectorAcceleration" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.resetServerlessVectorAcceleration"></a>

```go
func ResetServerlessVectorAcceleration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput">ServerlessVectorAccelerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerlessVectorAccelerationInput`<sup>Optional</sup> <a name="ServerlessVectorAccelerationInput" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAccelerationInput"></a>

```go
func ServerlessVectorAccelerationInput() *string
```

- *Type:* *string

---

##### `ServerlessVectorAcceleration`<sup>Required</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```go
func ServerlessVectorAcceleration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchserverlessCollection.OpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



