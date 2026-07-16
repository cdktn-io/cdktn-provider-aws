# `cloudformationType` Submodule <a name="`cloudformationType` Submodule" id="@cdktn/provider-aws.cloudformationType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationType <a name="CloudformationType" id="@cdktn/provider-aws.cloudformationType.CloudformationType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type aws_cloudformation_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudformationType.CloudformationType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudformationType(Construct Scope, string Id, CloudformationTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig">CloudformationTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig">CloudformationTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudformationType.CloudformationType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudformationType.CloudformationType.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudformationType.CloudformationType.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudformationType.CloudformationType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudformationType.CloudformationType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudformationType.CloudformationType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudformationType.CloudformationType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudformationType.CloudformationType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudformationType.CloudformationType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudformationType.CloudformationType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudformationType.CloudformationType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudformationType.CloudformationType.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudformationType.CloudformationType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudformationType.CloudformationType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudformationType.CloudformationType.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudformationType.CloudformationType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudformationType.CloudformationType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudformationType.CloudformationType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudformationType.CloudformationType.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudformationType.CloudformationType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-aws.cloudformationType.CloudformationType.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(CloudformationTypeLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudformationType.CloudformationType.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a>

---

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-aws.cloudformationType.CloudformationType.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-aws.cloudformationType.CloudformationType.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudformationType.CloudformationType.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-aws.cloudformationType.CloudformationType.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudformationType.CloudformationType.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudformationType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudformationType.CloudformationType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudformationType.CloudformationType.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudformationType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudformationType.CloudformationType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudformationType.CloudformationType.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudformationType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudformationType.CloudformationType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudformationType.CloudformationType.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudformationType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudformationType resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudformationType.CloudformationType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudformationType.CloudformationType.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.defaultVersionId">DefaultVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.deprecatedStatus">DeprecatedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.documentationUrl">DocumentationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.isDefaultVersion">IsDefaultVersion</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference">CloudformationTypeLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.provisioningType">ProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.typeArn">TypeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.schemaHandlerPackageInput">SchemaHandlerPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.schemaHandlerPackage">SchemaHandlerPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultVersionId`<sup>Required</sup> <a name="DefaultVersionId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.defaultVersionId"></a>

```csharp
public string DefaultVersionId { get; }
```

- *Type:* string

---

##### `DeprecatedStatus`<sup>Required</sup> <a name="DeprecatedStatus" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.deprecatedStatus"></a>

```csharp
public string DeprecatedStatus { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DocumentationUrl`<sup>Required</sup> <a name="DocumentationUrl" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.documentationUrl"></a>

```csharp
public string DocumentationUrl { get; }
```

- *Type:* string

---

##### `IsDefaultVersion`<sup>Required</sup> <a name="IsDefaultVersion" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.isDefaultVersion"></a>

```csharp
public IResolvable IsDefaultVersion { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.loggingConfig"></a>

```csharp
public CloudformationTypeLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference">CloudformationTypeLoggingConfigOutputReference</a>

---

##### `ProvisioningType`<sup>Required</sup> <a name="ProvisioningType" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.provisioningType"></a>

```csharp
public string ProvisioningType { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `TypeArn`<sup>Required</sup> <a name="TypeArn" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.typeArn"></a>

```csharp
public string TypeArn { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.loggingConfigInput"></a>

```csharp
public CloudformationTypeLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SchemaHandlerPackageInput`<sup>Optional</sup> <a name="SchemaHandlerPackageInput" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.schemaHandlerPackageInput"></a>

```csharp
public string SchemaHandlerPackageInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SchemaHandlerPackage`<sup>Required</sup> <a name="SchemaHandlerPackage" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.schemaHandlerPackage"></a>

```csharp
public string SchemaHandlerPackage { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudformationType.CloudformationType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationTypeConfig <a name="CloudformationTypeConfig" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudformationTypeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SchemaHandlerPackage,
    string TypeName,
    string ExecutionRoleArn = null,
    string Id = null,
    CloudformationTypeLoggingConfig LoggingConfig = null,
    string Region = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.schemaHandlerPackage">SchemaHandlerPackage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#schema_handler_package CloudformationType#schema_handler_package}. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#type_name CloudformationType#type_name}. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#execution_role_arn CloudformationType#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#id CloudformationType#id}. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#type CloudformationType#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SchemaHandlerPackage`<sup>Required</sup> <a name="SchemaHandlerPackage" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.schemaHandlerPackage"></a>

```csharp
public string SchemaHandlerPackage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#schema_handler_package CloudformationType#schema_handler_package}.

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#type_name CloudformationType#type_name}.

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#execution_role_arn CloudformationType#execution_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#id CloudformationType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.loggingConfig"></a>

```csharp
public CloudformationTypeLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#logging_config CloudformationType#logging_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#region CloudformationType#region}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#type CloudformationType#type}.

---

### CloudformationTypeLoggingConfig <a name="CloudformationTypeLoggingConfig" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudformationTypeLoggingConfig {
    string LogGroupName,
    string LogRoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#log_group_name CloudformationType#log_group_name}. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.property.logRoleArn">LogRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#log_role_arn CloudformationType#log_role_arn}. |

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#log_group_name CloudformationType#log_group_name}.

---

##### `LogRoleArn`<sup>Required</sup> <a name="LogRoleArn" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.property.logRoleArn"></a>

```csharp
public string LogRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/cloudformation_type#log_role_arn CloudformationType#log_role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationTypeLoggingConfigOutputReference <a name="CloudformationTypeLoggingConfigOutputReference" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudformationTypeLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logRoleArnInput">LogRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logRoleArn">LogRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogRoleArnInput`<sup>Optional</sup> <a name="LogRoleArnInput" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logRoleArnInput"></a>

```csharp
public string LogRoleArnInput { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogRoleArn`<sup>Required</sup> <a name="LogRoleArn" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logRoleArn"></a>

```csharp
public string LogRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public CloudformationTypeLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a>

---



