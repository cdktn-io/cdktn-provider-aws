# `cloudfrontFunction` Submodule <a name="`cloudfrontFunction` Submodule" id="@cdktn/provider-aws.cloudfrontFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFunction <a name="CloudfrontFunction" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function aws_cloudfront_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontFunction(Construct Scope, string Id, CloudfrontFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig">CloudfrontFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig">CloudfrontFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetKeyValueStoreAssociations">ResetKeyValueStoreAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetPublish">ResetPublish</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyValueStoreAssociations` <a name="ResetKeyValueStoreAssociations" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetKeyValueStoreAssociations"></a>

```csharp
private void ResetKeyValueStoreAssociations()
```

##### `ResetPublish` <a name="ResetPublish" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetPublish"></a>

```csharp
private void ResetPublish()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontFunction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudfrontFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudfrontFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudfrontFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudfrontFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudfrontFunction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.liveStageEtag">LiveStageEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.keyValueStoreAssociationsInput">KeyValueStoreAssociationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.publishInput">PublishInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.keyValueStoreAssociations">KeyValueStoreAssociations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.publish">Publish</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `LiveStageEtag`<sup>Required</sup> <a name="LiveStageEtag" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.liveStageEtag"></a>

```csharp
public string LiveStageEtag { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyValueStoreAssociationsInput`<sup>Optional</sup> <a name="KeyValueStoreAssociationsInput" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.keyValueStoreAssociationsInput"></a>

```csharp
public string[] KeyValueStoreAssociationsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublishInput`<sup>Optional</sup> <a name="PublishInput" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.publishInput"></a>

```csharp
public bool|IResolvable PublishInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyValueStoreAssociations`<sup>Required</sup> <a name="KeyValueStoreAssociations" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.keyValueStoreAssociations"></a>

```csharp
public string[] KeyValueStoreAssociations { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Publish`<sup>Required</sup> <a name="Publish" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.publish"></a>

```csharp
public bool|IResolvable Publish { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFunctionConfig <a name="CloudfrontFunctionConfig" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontFunctionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Code,
    string Name,
    string Runtime,
    string Comment = null,
    string Id = null,
    string[] KeyValueStoreAssociations = null,
    bool|IResolvable Publish = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.code">Code</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#code CloudfrontFunction#code}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#name CloudfrontFunction#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.runtime">Runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#runtime CloudfrontFunction#runtime}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#comment CloudfrontFunction#comment}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#id CloudfrontFunction#id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.keyValueStoreAssociations">KeyValueStoreAssociations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#key_value_store_associations CloudfrontFunction#key_value_store_associations}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.publish">Publish</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#publish CloudfrontFunction#publish}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#code CloudfrontFunction#code}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#name CloudfrontFunction#name}.

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#runtime CloudfrontFunction#runtime}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#comment CloudfrontFunction#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#id CloudfrontFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyValueStoreAssociations`<sup>Optional</sup> <a name="KeyValueStoreAssociations" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.keyValueStoreAssociations"></a>

```csharp
public string[] KeyValueStoreAssociations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#key_value_store_associations CloudfrontFunction#key_value_store_associations}.

---

##### `Publish`<sup>Optional</sup> <a name="Publish" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.publish"></a>

```csharp
public bool|IResolvable Publish { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudfront_function#publish CloudfrontFunction#publish}.

---



