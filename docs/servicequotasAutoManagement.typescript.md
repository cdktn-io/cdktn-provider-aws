# `servicequotasAutoManagement` Submodule <a name="`servicequotasAutoManagement` Submodule" id="@cdktn/provider-aws.servicequotasAutoManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicequotasAutoManagement <a name="ServicequotasAutoManagement" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management aws_servicequotas_auto_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer"></a>

```typescript
import { servicequotasAutoManagement } from '@cdktn/provider-aws'

new servicequotasAutoManagement.ServicequotasAutoManagement(scope: Construct, id: string, config: ServicequotasAutoManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig">ServicequotasAutoManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig">ServicequotasAutoManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetExclusionList">resetExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetNotificationArn">resetNotificationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExclusionList` <a name="resetExclusionList" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetExclusionList"></a>

```typescript
public resetExclusionList(): void
```

##### `resetNotificationArn` <a name="resetNotificationArn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetNotificationArn"></a>

```typescript
public resetNotificationArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicequotasAutoManagement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct"></a>

```typescript
import { servicequotasAutoManagement } from '@cdktn/provider-aws'

servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement"></a>

```typescript
import { servicequotasAutoManagement } from '@cdktn/provider-aws'

servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource"></a>

```typescript
import { servicequotasAutoManagement } from '@cdktn/provider-aws'

servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport"></a>

```typescript
import { servicequotasAutoManagement } from '@cdktn/provider-aws'

servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicequotasAutoManagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicequotasAutoManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicequotasAutoManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicequotasAutoManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionListInput">exclusionListInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArnInput">notificationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevelInput">optInLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInTypeInput">optInTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionList">exclusionList</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArn">notificationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevel">optInLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInType">optInType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `exclusionListInput`<sup>Optional</sup> <a name="exclusionListInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionListInput"></a>

```typescript
public readonly exclusionListInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `notificationArnInput`<sup>Optional</sup> <a name="notificationArnInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArnInput"></a>

```typescript
public readonly notificationArnInput: string;
```

- *Type:* string

---

##### `optInLevelInput`<sup>Optional</sup> <a name="optInLevelInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevelInput"></a>

```typescript
public readonly optInLevelInput: string;
```

- *Type:* string

---

##### `optInTypeInput`<sup>Optional</sup> <a name="optInTypeInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInTypeInput"></a>

```typescript
public readonly optInTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `exclusionList`<sup>Required</sup> <a name="exclusionList" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.exclusionList"></a>

```typescript
public readonly exclusionList: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `notificationArn`<sup>Required</sup> <a name="notificationArn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.notificationArn"></a>

```typescript
public readonly notificationArn: string;
```

- *Type:* string

---

##### `optInLevel`<sup>Required</sup> <a name="optInLevel" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInLevel"></a>

```typescript
public readonly optInLevel: string;
```

- *Type:* string

---

##### `optInType`<sup>Required</sup> <a name="optInType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.optInType"></a>

```typescript
public readonly optInType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicequotasAutoManagementConfig <a name="ServicequotasAutoManagementConfig" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.Initializer"></a>

```typescript
import { servicequotasAutoManagement } from '@cdktn/provider-aws'

const servicequotasAutoManagementConfig: servicequotasAutoManagement.ServicequotasAutoManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInLevel">optInLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#opt_in_level ServicequotasAutoManagement#opt_in_level}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInType">optInType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#opt_in_type ServicequotasAutoManagement#opt_in_type}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.exclusionList">exclusionList</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#exclusion_list ServicequotasAutoManagement#exclusion_list}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.notificationArn">notificationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#notification_arn ServicequotasAutoManagement#notification_arn}. |
| <code><a href="#@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `optInLevel`<sup>Required</sup> <a name="optInLevel" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInLevel"></a>

```typescript
public readonly optInLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#opt_in_level ServicequotasAutoManagement#opt_in_level}.

---

##### `optInType`<sup>Required</sup> <a name="optInType" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.optInType"></a>

```typescript
public readonly optInType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#opt_in_type ServicequotasAutoManagement#opt_in_type}.

---

##### `exclusionList`<sup>Optional</sup> <a name="exclusionList" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.exclusionList"></a>

```typescript
public readonly exclusionList: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#exclusion_list ServicequotasAutoManagement#exclusion_list}.

---

##### `notificationArn`<sup>Optional</sup> <a name="notificationArn" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.notificationArn"></a>

```typescript
public readonly notificationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#notification_arn ServicequotasAutoManagement#notification_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.servicequotasAutoManagement.ServicequotasAutoManagementConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/servicequotas_auto_management#region ServicequotasAutoManagement#region}

---



