# `servicequotasAutoManagement` Submodule <a name="`servicequotasAutoManagement` Submodule" id="@cdktn/provider-aws.servicequotasAutoManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicequotasAutoManagement <a name="ServicequotasAutoManagement" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management aws_servicequotas_auto_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicequotasAutoManagement(Construct Scope, string Id, ServicequotasAutoManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig">ServicequotasAutoManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig">ServicequotasAutoManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetExclusionList">ResetExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetNotificationArn">ResetNotificationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetExclusionList` <a name="ResetExclusionList" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetExclusionList"></a>

```csharp
private void ResetExclusionList()
```

##### `ResetNotificationArn` <a name="ResetNotificationArn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetNotificationArn"></a>

```csharp
private void ResetNotificationArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicequotasAutoManagement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicequotasAutoManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicequotasAutoManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicequotasAutoManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServicequotasAutoManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicequotasAutoManagement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicequotasAutoManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicequotasAutoManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicequotasAutoManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionListInput">ExclusionListInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArnInput">NotificationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevelInput">OptInLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInTypeInput">OptInTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionList">ExclusionList</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArn">NotificationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevel">OptInLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInType">OptInType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ExclusionListInput`<sup>Optional</sup> <a name="ExclusionListInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionListInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> ExclusionListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `NotificationArnInput`<sup>Optional</sup> <a name="NotificationArnInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArnInput"></a>

```csharp
public string NotificationArnInput { get; }
```

- *Type:* string

---

##### `OptInLevelInput`<sup>Optional</sup> <a name="OptInLevelInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevelInput"></a>

```csharp
public string OptInLevelInput { get; }
```

- *Type:* string

---

##### `OptInTypeInput`<sup>Optional</sup> <a name="OptInTypeInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInTypeInput"></a>

```csharp
public string OptInTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ExclusionList`<sup>Required</sup> <a name="ExclusionList" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionList"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> ExclusionList { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `NotificationArn`<sup>Required</sup> <a name="NotificationArn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArn"></a>

```csharp
public string NotificationArn { get; }
```

- *Type:* string

---

##### `OptInLevel`<sup>Required</sup> <a name="OptInLevel" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevel"></a>

```csharp
public string OptInLevel { get; }
```

- *Type:* string

---

##### `OptInType`<sup>Required</sup> <a name="OptInType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInType"></a>

```csharp
public string OptInType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicequotasAutoManagementConfig <a name="ServicequotasAutoManagementConfig" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServicequotasAutoManagementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string OptInLevel,
    string OptInType,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> ExclusionList = null,
    string NotificationArn = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInLevel">OptInLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#opt_in_level ServicequotasAutoManagement#opt_in_level}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInType">OptInType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#opt_in_type ServicequotasAutoManagement#opt_in_type}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.exclusionList">ExclusionList</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#exclusion_list ServicequotasAutoManagement#exclusion_list}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.notificationArn">NotificationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#notification_arn ServicequotasAutoManagement#notification_arn}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `OptInLevel`<sup>Required</sup> <a name="OptInLevel" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInLevel"></a>

```csharp
public string OptInLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#opt_in_level ServicequotasAutoManagement#opt_in_level}.

---

##### `OptInType`<sup>Required</sup> <a name="OptInType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInType"></a>

```csharp
public string OptInType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#opt_in_type ServicequotasAutoManagement#opt_in_type}.

---

##### `ExclusionList`<sup>Optional</sup> <a name="ExclusionList" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.exclusionList"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> ExclusionList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#exclusion_list ServicequotasAutoManagement#exclusion_list}.

---

##### `NotificationArn`<sup>Optional</sup> <a name="NotificationArn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.notificationArn"></a>

```csharp
public string NotificationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#notification_arn ServicequotasAutoManagement#notification_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/servicequotas_auto_management#region ServicequotasAutoManagement#region}

---



