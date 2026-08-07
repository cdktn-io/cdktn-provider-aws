# `ecsDaemonTaskDefinition` Submodule <a name="`ecsDaemonTaskDefinition` Submodule" id="@cdktn/provider-aws.ecsDaemonTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsDaemonTaskDefinition <a name="EcsDaemonTaskDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition aws_ecs_daemon_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinition(scope: Construct, id: string, config: EcsDaemonTaskDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig">EcsDaemonTaskDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig">EcsDaemonTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition">putContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetContainerDefinition">resetContainerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTaskRoleArn">resetTaskRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainerDefinition` <a name="putContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition"></a>

```typescript
public putContainerDefinition(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putContainerDefinition.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]

---

##### `putVolume` <a name="putVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume"></a>

```typescript
public putVolume(value: IResolvable | EcsDaemonTaskDefinitionVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.putVolume.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]

---

##### `resetContainerDefinition` <a name="resetContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetContainerDefinition"></a>

```typescript
public resetContainerDefinition(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaskRoleArn` <a name="resetTaskRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetTaskRoleArn"></a>

```typescript
public resetTaskRoleArn(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.resetVolume"></a>

```typescript
public resetVolume(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EcsDaemonTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsDaemonTaskDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsDaemonTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcsDaemonTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinition">containerDefinition</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList">EcsDaemonTaskDefinitionContainerDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList">EcsDaemonTaskDefinitionVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinitionInput">containerDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArnInput">taskRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volumeInput">volumeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `containerDefinition`<sup>Required</sup> <a name="containerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinition"></a>

```typescript
public readonly containerDefinition: EcsDaemonTaskDefinitionContainerDefinitionList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList">EcsDaemonTaskDefinitionContainerDefinitionList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volume"></a>

```typescript
public readonly volume: EcsDaemonTaskDefinitionVolumeList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList">EcsDaemonTaskDefinitionVolumeList</a>

---

##### `containerDefinitionInput`<sup>Optional</sup> <a name="containerDefinitionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.containerDefinitionInput"></a>

```typescript
public readonly containerDefinitionInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinition[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskRoleArnInput`<sup>Optional</sup> <a name="taskRoleArnInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArnInput"></a>

```typescript
public readonly taskRoleArnInput: string;
```

- *Type:* string

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | EcsDaemonTaskDefinitionVolume[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsDaemonTaskDefinitionConfig <a name="EcsDaemonTaskDefinitionConfig" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionConfig: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.family">family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.containerDefinition">containerDefinition</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]</code> | container_definition block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.cpu">cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.memory">memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.volume">volume</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]</code> | volume block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#family EcsDaemonTaskDefinition#family}.

---

##### `containerDefinition`<sup>Optional</sup> <a name="containerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.containerDefinition"></a>

```typescript
public readonly containerDefinition: IResolvable | EcsDaemonTaskDefinitionContainerDefinition[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]

container_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_definition EcsDaemonTaskDefinition#container_definition}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#execution_role_arn EcsDaemonTaskDefinition#execution_role_arn}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#region EcsDaemonTaskDefinition#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#tags EcsDaemonTaskDefinition#tags}.

---

##### `taskRoleArn`<sup>Optional</sup> <a name="taskRoleArn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#task_role_arn EcsDaemonTaskDefinition#task_role_arn}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionConfig.property.volume"></a>

```typescript
public readonly volume: IResolvable | EcsDaemonTaskDefinitionVolume[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#volume EcsDaemonTaskDefinition#volume}

---

### EcsDaemonTaskDefinitionContainerDefinition <a name="EcsDaemonTaskDefinitionContainerDefinition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinition: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#image EcsDaemonTaskDefinition#image}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.cpu">cpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.dependsOn">dependsOn</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]</code> | depends_on block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#entry_point EcsDaemonTaskDefinition#entry_point}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environment">environment</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]</code> | environment block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environmentFile">environmentFile</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]</code> | environment_file block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.essential">essential</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#essential EcsDaemonTaskDefinition#essential}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.firelensConfiguration">firelensConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]</code> | firelens_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.healthCheck">healthCheck</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]</code> | health_check block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.interactive">interactive</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#interactive EcsDaemonTaskDefinition#interactive}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.linuxParameters">linuxParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]</code> | linux_parameters block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.logConfiguration">logConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]</code> | log_configuration block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memory">memory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory_reservation EcsDaemonTaskDefinition#memory_reservation}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.mountPoint">mountPoint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]</code> | mount_point block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.privileged">privileged</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#privileged EcsDaemonTaskDefinition#privileged}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.pseudoTerminal">pseudoTerminal</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal EcsDaemonTaskDefinition#pseudo_terminal}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.readonlyRootFilesystem">readonlyRootFilesystem</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem EcsDaemonTaskDefinition#readonly_root_filesystem}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.repositoryCredentials">repositoryCredentials</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]</code> | repository_credentials block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.restartPolicy">restartPolicy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]</code> | restart_policy block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.secret">secret</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]</code> | secret block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.startTimeout">startTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#start_timeout EcsDaemonTaskDefinition#start_timeout}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.stopTimeout">stopTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#stop_timeout EcsDaemonTaskDefinition#stop_timeout}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.systemControl">systemControl</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]</code> | system_control block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.ulimit">ulimit</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]</code> | ulimit block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#user EcsDaemonTaskDefinition#user}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#working_directory EcsDaemonTaskDefinition#working_directory}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#image EcsDaemonTaskDefinition#image}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#cpu EcsDaemonTaskDefinition#cpu}.

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionDependsOn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]

depends_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#depends_on EcsDaemonTaskDefinition#depends_on}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#entry_point EcsDaemonTaskDefinition#entry_point}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environment"></a>

```typescript
public readonly environment: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#environment EcsDaemonTaskDefinition#environment}

---

##### `environmentFile`<sup>Optional</sup> <a name="environmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.environmentFile"></a>

```typescript
public readonly environmentFile: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]

environment_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#environment_file EcsDaemonTaskDefinition#environment_file}

---

##### `essential`<sup>Optional</sup> <a name="essential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#essential EcsDaemonTaskDefinition#essential}.

---

##### `firelensConfiguration`<sup>Optional</sup> <a name="firelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.firelensConfiguration"></a>

```typescript
public readonly firelensConfiguration: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]

firelens_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#firelens_configuration EcsDaemonTaskDefinition#firelens_configuration}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.healthCheck"></a>

```typescript
public readonly healthCheck: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionHealthCheck[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#health_check EcsDaemonTaskDefinition#health_check}

---

##### `interactive`<sup>Optional</sup> <a name="interactive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.interactive"></a>

```typescript
public readonly interactive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#interactive EcsDaemonTaskDefinition#interactive}.

---

##### `linuxParameters`<sup>Optional</sup> <a name="linuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.linuxParameters"></a>

```typescript
public readonly linuxParameters: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]

linux_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#linux_parameters EcsDaemonTaskDefinition#linux_parameters}

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#log_configuration EcsDaemonTaskDefinition#log_configuration}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory EcsDaemonTaskDefinition#memory}.

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#memory_reservation EcsDaemonTaskDefinition#memory_reservation}.

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.mountPoint"></a>

```typescript
public readonly mountPoint: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionMountPoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]

mount_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#mount_point EcsDaemonTaskDefinition#mount_point}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#privileged EcsDaemonTaskDefinition#privileged}.

---

##### `pseudoTerminal`<sup>Optional</sup> <a name="pseudoTerminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.pseudoTerminal"></a>

```typescript
public readonly pseudoTerminal: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#pseudo_terminal EcsDaemonTaskDefinition#pseudo_terminal}.

---

##### `readonlyRootFilesystem`<sup>Optional</sup> <a name="readonlyRootFilesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.readonlyRootFilesystem"></a>

```typescript
public readonly readonlyRootFilesystem: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#readonly_root_filesystem EcsDaemonTaskDefinition#readonly_root_filesystem}.

---

##### `repositoryCredentials`<sup>Optional</sup> <a name="repositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.repositoryCredentials"></a>

```typescript
public readonly repositoryCredentials: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]

repository_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#repository_credentials EcsDaemonTaskDefinition#repository_credentials}

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]

restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#restart_policy EcsDaemonTaskDefinition#restart_policy}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.secret"></a>

```typescript
public readonly secret: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#secret EcsDaemonTaskDefinition#secret}

---

##### `startTimeout`<sup>Optional</sup> <a name="startTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.startTimeout"></a>

```typescript
public readonly startTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#start_timeout EcsDaemonTaskDefinition#start_timeout}.

---

##### `stopTimeout`<sup>Optional</sup> <a name="stopTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.stopTimeout"></a>

```typescript
public readonly stopTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#stop_timeout EcsDaemonTaskDefinition#stop_timeout}.

---

##### `systemControl`<sup>Optional</sup> <a name="systemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.systemControl"></a>

```typescript
public readonly systemControl: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSystemControl[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]

system_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#system_control EcsDaemonTaskDefinition#system_control}

---

##### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.ulimit"></a>

```typescript
public readonly ulimit: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionUlimit[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#ulimit EcsDaemonTaskDefinition#ulimit}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#user EcsDaemonTaskDefinition#user}.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#working_directory EcsDaemonTaskDefinition#working_directory}.

---

### EcsDaemonTaskDefinitionContainerDefinitionDependsOn <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionDependsOn: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#condition EcsDaemonTaskDefinition#condition}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_name EcsDaemonTaskDefinition#container_name}. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#condition EcsDaemonTaskDefinition#condition}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_name EcsDaemonTaskDefinition#container_name}.

---

### EcsDaemonTaskDefinitionContainerDefinitionEnvironment <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionEnvironment: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionEnvironmentFile: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#type EcsDaemonTaskDefinition#type}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}.

---

### EcsDaemonTaskDefinitionContainerDefinitionHealthCheck <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionHealthCheck: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#interval EcsDaemonTaskDefinition#interval}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.retries">retries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#retries EcsDaemonTaskDefinition#retries}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.startPeriod">startPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#start_period EcsDaemonTaskDefinition#start_period}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#timeout EcsDaemonTaskDefinition#timeout}. |

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#command EcsDaemonTaskDefinition#command}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#interval EcsDaemonTaskDefinition#interval}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#retries EcsDaemonTaskDefinition#retries}.

---

##### `startPeriod`<sup>Optional</sup> <a name="startPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.startPeriod"></a>

```typescript
public readonly startPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#start_period EcsDaemonTaskDefinition#start_period}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#timeout EcsDaemonTaskDefinition#timeout}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionLinuxParameters: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.capabilities">capabilities</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]</code> | capabilities block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.device">device</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]</code> | device block. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.initProcessEnabled">initProcessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#init_process_enabled EcsDaemonTaskDefinition#init_process_enabled}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.tmpfs">tmpfs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]</code> | tmpfs block. |

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.capabilities"></a>

```typescript
public readonly capabilities: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#capabilities EcsDaemonTaskDefinition#capabilities}

---

##### `device`<sup>Optional</sup> <a name="device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.device"></a>

```typescript
public readonly device: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]

device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#device EcsDaemonTaskDefinition#device}

---

##### `initProcessEnabled`<sup>Optional</sup> <a name="initProcessEnabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.initProcessEnabled"></a>

```typescript
public readonly initProcessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#init_process_enabled EcsDaemonTaskDefinition#init_process_enabled}.

---

##### `tmpfs`<sup>Optional</sup> <a name="tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters.property.tmpfs"></a>

```typescript
public readonly tmpfs: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]

tmpfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#tmpfs EcsDaemonTaskDefinition#tmpfs}

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.add">add</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#add EcsDaemonTaskDefinition#add}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.drop">drop</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#drop EcsDaemonTaskDefinition#drop}. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.add"></a>

```typescript
public readonly add: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#add EcsDaemonTaskDefinition#add}.

---

##### `drop`<sup>Optional</sup> <a name="drop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities.property.drop"></a>

```typescript
public readonly drop: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#drop EcsDaemonTaskDefinition#drop}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.hostPath">hostPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#host_path EcsDaemonTaskDefinition#host_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.containerPath">containerPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.permissions">permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#permissions EcsDaemonTaskDefinition#permissions}. |

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#host_path EcsDaemonTaskDefinition#host_path}.

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#permissions EcsDaemonTaskDefinition#permissions}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.containerPath">containerPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#size EcsDaemonTaskDefinition#size}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#mount_options EcsDaemonTaskDefinition#mount_options}. |

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#size EcsDaemonTaskDefinition#size}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#mount_options EcsDaemonTaskDefinition#mount_options}.

---

### EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionLogConfiguration: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.logDriver">logDriver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#log_driver EcsDaemonTaskDefinition#log_driver}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.secretOption">secretOption</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]</code> | secret_option block. |

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.logDriver"></a>

```typescript
public readonly logDriver: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#log_driver EcsDaemonTaskDefinition#log_driver}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#options EcsDaemonTaskDefinition#options}.

---

##### `secretOption`<sup>Optional</sup> <a name="secretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration.property.secretOption"></a>

```typescript
public readonly secretOption: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]

secret_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#secret_option EcsDaemonTaskDefinition#secret_option}

---

### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.valueFrom">valueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}.

---

### EcsDaemonTaskDefinitionContainerDefinitionMountPoint <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionMountPoint: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.containerPath">containerPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#read_only EcsDaemonTaskDefinition#read_only}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.sourceVolume">sourceVolume</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#source_volume EcsDaemonTaskDefinition#source_volume}. |

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#container_path EcsDaemonTaskDefinition#container_path}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#read_only EcsDaemonTaskDefinition#read_only}.

---

##### `sourceVolume`<sup>Optional</sup> <a name="sourceVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint.property.sourceVolume"></a>

```typescript
public readonly sourceVolume: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#source_volume EcsDaemonTaskDefinition#source_volume}.

---

### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.property.credentialsParameter">credentialsParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#credentials_parameter EcsDaemonTaskDefinition#credentials_parameter}. |

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials.property.credentialsParameter"></a>

```typescript
public readonly credentialsParameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#credentials_parameter EcsDaemonTaskDefinition#credentials_parameter}.

---

### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionRestartPolicy: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#enabled EcsDaemonTaskDefinition#enabled}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.ignoredExitCodes">ignoredExitCodes</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes EcsDaemonTaskDefinition#ignored_exit_codes}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.restartAttemptPeriod">restartAttemptPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period EcsDaemonTaskDefinition#restart_attempt_period}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#enabled EcsDaemonTaskDefinition#enabled}.

---

##### `ignoredExitCodes`<sup>Optional</sup> <a name="ignoredExitCodes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.ignoredExitCodes"></a>

```typescript
public readonly ignoredExitCodes: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#ignored_exit_codes EcsDaemonTaskDefinition#ignored_exit_codes}.

---

##### `restartAttemptPeriod`<sup>Optional</sup> <a name="restartAttemptPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy.property.restartAttemptPeriod"></a>

```typescript
public readonly restartAttemptPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#restart_attempt_period EcsDaemonTaskDefinition#restart_attempt_period}.

---

### EcsDaemonTaskDefinitionContainerDefinitionSecret <a name="EcsDaemonTaskDefinitionContainerDefinitionSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionSecret: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.valueFrom">valueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value_from EcsDaemonTaskDefinition#value_from}.

---

### EcsDaemonTaskDefinitionContainerDefinitionSystemControl <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionSystemControl: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#namespace EcsDaemonTaskDefinition#namespace}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#namespace EcsDaemonTaskDefinition#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#value EcsDaemonTaskDefinition#value}.

---

### EcsDaemonTaskDefinitionContainerDefinitionUlimit <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionContainerDefinitionUlimit: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.hardLimit">hardLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#hard_limit EcsDaemonTaskDefinition#hard_limit}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.softLimit">softLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#soft_limit EcsDaemonTaskDefinition#soft_limit}. |

---

##### `hardLimit`<sup>Required</sup> <a name="hardLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.hardLimit"></a>

```typescript
public readonly hardLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#hard_limit EcsDaemonTaskDefinition#hard_limit}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `softLimit`<sup>Required</sup> <a name="softLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit.property.softLimit"></a>

```typescript
public readonly softLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#soft_limit EcsDaemonTaskDefinition#soft_limit}.

---

### EcsDaemonTaskDefinitionVolume <a name="EcsDaemonTaskDefinitionVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionVolume: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.host">host</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]</code> | host block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#name EcsDaemonTaskDefinition#name}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume.property.host"></a>

```typescript
public readonly host: IResolvable | EcsDaemonTaskDefinitionVolumeHost[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#host EcsDaemonTaskDefinition#host}

---

### EcsDaemonTaskDefinitionVolumeHost <a name="EcsDaemonTaskDefinitionVolumeHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

const ecsDaemonTaskDefinitionVolumeHost: ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.property.sourcePath">sourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#source_path EcsDaemonTaskDefinition#source_path}. |

---

##### `sourcePath`<sup>Optional</sup> <a name="sourcePath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost.property.sourcePath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ecs_daemon_task_definition#source_path EcsDaemonTaskDefinition#source_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsDaemonTaskDefinitionContainerDefinitionDependsOnList <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOnList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionDependsOn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionDependsOn;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionHealthCheck[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetStartPeriod">resetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetRetries` <a name="resetRetries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetStartPeriod` <a name="resetStartPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetStartPeriod"></a>

```typescript
public resetStartPeriod(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriodInput">startPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `startPeriodInput`<sup>Optional</sup> <a name="startPeriodInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriodInput"></a>

```typescript
public readonly startPeriodInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.startPeriod"></a>

```typescript
public readonly startPeriod: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionHealthCheck;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetDrop">resetDrop</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetDrop` <a name="resetDrop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.resetDrop"></a>

```typescript
public resetDrop(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.addInput">addInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.dropInput">dropInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.add">add</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.drop">drop</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.addInput"></a>

```typescript
public readonly addInput: string[];
```

- *Type:* string[]

---

##### `dropInput`<sup>Optional</sup> <a name="dropInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.dropInput"></a>

```typescript
public readonly dropInput: string[];
```

- *Type:* string[]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.add"></a>

```typescript
public readonly add: string[];
```

- *Type:* string[]

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.drop"></a>

```typescript
public readonly drop: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetContainerPath"></a>

```typescript
public resetContainerPath(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPathInput">hostPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPath">hostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPathInput"></a>

```typescript
public readonly containerPathInput: string;
```

- *Type:* string

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPathInput"></a>

```typescript
public readonly hostPathInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice">putDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs">putTmpfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetDevice">resetDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetInitProcessEnabled">resetInitProcessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetTmpfs">resetTmpfs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapabilities` <a name="putCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities"></a>

```typescript
public putCapabilities(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putCapabilities.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]

---

##### `putDevice` <a name="putDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice"></a>

```typescript
public putDevice(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putDevice.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]

---

##### `putTmpfs` <a name="putTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs"></a>

```typescript
public putTmpfs(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.putTmpfs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetDevice` <a name="resetDevice" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetDevice"></a>

```typescript
public resetDevice(): void
```

##### `resetInitProcessEnabled` <a name="resetInitProcessEnabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetInitProcessEnabled"></a>

```typescript
public resetInitProcessEnabled(): void
```

##### `resetTmpfs` <a name="resetTmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.resetTmpfs"></a>

```typescript
public resetTmpfs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.device">device</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfs">tmpfs</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilitiesInput">capabilitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.deviceInput">deviceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabledInput">initProcessEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfsInput">tmpfsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabled">initProcessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilities"></a>

```typescript
public readonly capabilities: EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilitiesList</a>

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.device"></a>

```typescript
public readonly device: EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDeviceList</a>

---

##### `tmpfs`<sup>Required</sup> <a name="tmpfs" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfs"></a>

```typescript
public readonly tmpfs: EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersCapabilities</a>[]

---

##### `deviceInput`<sup>Optional</sup> <a name="deviceInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.deviceInput"></a>

```typescript
public readonly deviceInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersDevice</a>[]

---

##### `initProcessEnabledInput`<sup>Optional</sup> <a name="initProcessEnabledInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabledInput"></a>

```typescript
public readonly initProcessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tmpfsInput`<sup>Optional</sup> <a name="tmpfsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.tmpfsInput"></a>

```typescript
public readonly tmpfsInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]

---

##### `initProcessEnabled`<sup>Required</sup> <a name="initProcessEnabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.initProcessEnabled"></a>

```typescript
public readonly initProcessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPathInput"></a>

```typescript
public readonly containerPathInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string[];
```

- *Type:* string[]

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersTmpfs</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionList <a name="EcsDaemonTaskDefinitionContainerDefinitionList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinition[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption">putSecretOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetSecretOption">resetSecretOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretOption` <a name="putSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption"></a>

```typescript
public putSecretOption(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.putSecretOption.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]

---

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSecretOption` <a name="resetSecretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.resetSecretOption"></a>

```typescript
public resetSecretOption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOption">secretOption</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriverInput">logDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOptionInput">secretOptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriver">logDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretOption`<sup>Required</sup> <a name="secretOption" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOption"></a>

```typescript
public readonly secretOption: EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList</a>

---

##### `logDriverInput`<sup>Optional</sup> <a name="logDriverInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriverInput"></a>

```typescript
public readonly logDriverInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `secretOptionInput`<sup>Optional</sup> <a name="secretOptionInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.secretOptionInput"></a>

```typescript
public readonly secretOptionInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.logDriver"></a>

```typescript
public readonly logDriver: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationSecretOption</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionMountPointList <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPointList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionMountPoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetSourceVolume">resetSourceVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetContainerPath"></a>

```typescript
public resetContainerPath(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSourceVolume` <a name="resetSourceVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.resetSourceVolume"></a>

```typescript
public resetSourceVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolumeInput">sourceVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolume">sourceVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPathInput"></a>

```typescript
public readonly containerPathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceVolumeInput`<sup>Optional</sup> <a name="sourceVolumeInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolumeInput"></a>

```typescript
public readonly sourceVolumeInput: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceVolume`<sup>Required</sup> <a name="sourceVolume" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.sourceVolume"></a>

```typescript
public readonly sourceVolume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionMountPoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn">putDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile">putEnvironmentFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration">putFirelensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters">putLinuxParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint">putMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials">putRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy">putRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl">putSystemControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit">putUlimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironmentFile">resetEnvironmentFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEssential">resetEssential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetFirelensConfiguration">resetFirelensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetInteractive">resetInteractive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLinuxParameters">resetLinuxParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMountPoint">resetMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPrivileged">resetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPseudoTerminal">resetPseudoTerminal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetReadonlyRootFilesystem">resetReadonlyRootFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRepositoryCredentials">resetRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRestartPolicy">resetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStartTimeout">resetStartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStopTimeout">resetStopTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSystemControl">resetSystemControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUlimit">resetUlimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUser">resetUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependsOn` <a name="putDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn"></a>

```typescript
public putDependsOn(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionDependsOn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putDependsOn.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment"></a>

```typescript
public putEnvironment(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironment.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]

---

##### `putEnvironmentFile` <a name="putEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile"></a>

```typescript
public putEnvironmentFile(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putEnvironmentFile.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]

---

##### `putFirelensConfiguration` <a name="putFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration"></a>

```typescript
public putFirelensConfiguration(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putFirelensConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck"></a>

```typescript
public putHealthCheck(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionHealthCheck[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]

---

##### `putLinuxParameters` <a name="putLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters"></a>

```typescript
public putLinuxParameters(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLinuxParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration"></a>

```typescript
public putLogConfiguration(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]

---

##### `putMountPoint` <a name="putMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint"></a>

```typescript
public putMountPoint(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionMountPoint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putMountPoint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]

---

##### `putRepositoryCredentials` <a name="putRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials"></a>

```typescript
public putRepositoryCredentials(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRepositoryCredentials.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]

---

##### `putRestartPolicy` <a name="putRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy"></a>

```typescript
public putRestartPolicy(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putRestartPolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret"></a>

```typescript
public putSecret(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSecret.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]

---

##### `putSystemControl` <a name="putSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl"></a>

```typescript
public putSystemControl(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSystemControl[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putSystemControl.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]

---

##### `putUlimit` <a name="putUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit"></a>

```typescript
public putUlimit(value: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionUlimit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.putUlimit.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]

---

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetDependsOn"></a>

```typescript
public resetDependsOn(): void
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEntryPoint"></a>

```typescript
public resetEntryPoint(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetEnvironmentFile` <a name="resetEnvironmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEnvironmentFile"></a>

```typescript
public resetEnvironmentFile(): void
```

##### `resetEssential` <a name="resetEssential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetEssential"></a>

```typescript
public resetEssential(): void
```

##### `resetFirelensConfiguration` <a name="resetFirelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetFirelensConfiguration"></a>

```typescript
public resetFirelensConfiguration(): void
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetInteractive` <a name="resetInteractive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetInteractive"></a>

```typescript
public resetInteractive(): void
```

##### `resetLinuxParameters` <a name="resetLinuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLinuxParameters"></a>

```typescript
public resetLinuxParameters(): void
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetLogConfiguration"></a>

```typescript
public resetLogConfiguration(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMemoryReservation"></a>

```typescript
public resetMemoryReservation(): void
```

##### `resetMountPoint` <a name="resetMountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetMountPoint"></a>

```typescript
public resetMountPoint(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPrivileged` <a name="resetPrivileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPrivileged"></a>

```typescript
public resetPrivileged(): void
```

##### `resetPseudoTerminal` <a name="resetPseudoTerminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetPseudoTerminal"></a>

```typescript
public resetPseudoTerminal(): void
```

##### `resetReadonlyRootFilesystem` <a name="resetReadonlyRootFilesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetReadonlyRootFilesystem"></a>

```typescript
public resetReadonlyRootFilesystem(): void
```

##### `resetRepositoryCredentials` <a name="resetRepositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRepositoryCredentials"></a>

```typescript
public resetRepositoryCredentials(): void
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetRestartPolicy"></a>

```typescript
public resetRestartPolicy(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetStartTimeout` <a name="resetStartTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStartTimeout"></a>

```typescript
public resetStartTimeout(): void
```

##### `resetStopTimeout` <a name="resetStopTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetStopTimeout"></a>

```typescript
public resetStopTimeout(): void
```

##### `resetSystemControl` <a name="resetSystemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetSystemControl"></a>

```typescript
public resetSystemControl(): void
```

##### `resetUlimit` <a name="resetUlimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUlimit"></a>

```typescript
public resetUlimit(): void
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOn">dependsOn</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList">EcsDaemonTaskDefinitionContainerDefinitionDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFile">environmentFile</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfiguration">firelensConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList">EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParameters">linuxParameters</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPoint">mountPoint</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList">EcsDaemonTaskDefinitionContainerDefinitionMountPointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentials">repositoryCredentials</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicy">restartPolicy</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList">EcsDaemonTaskDefinitionContainerDefinitionSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControl">systemControl</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList">EcsDaemonTaskDefinitionContainerDefinitionSystemControlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimit">ulimit</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList">EcsDaemonTaskDefinitionContainerDefinitionUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFileInput">environmentFileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentInput">environmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essentialInput">essentialInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfigurationInput">firelensConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactiveInput">interactiveInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParametersInput">linuxParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfigurationInput">logConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservationInput">memoryReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privilegedInput">privilegedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminalInput">pseudoTerminalInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystemInput">readonlyRootFilesystemInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentialsInput">repositoryCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicyInput">restartPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secretInput">secretInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeoutInput">startTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeoutInput">stopTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControlInput">systemControlInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimitInput">ulimitInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essential">essential</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactive">interactive</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privileged">privileged</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminal">pseudoTerminal</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystem">readonlyRootFilesystem</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeout">startTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeout">stopTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: EcsDaemonTaskDefinitionContainerDefinitionDependsOnList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOnList">EcsDaemonTaskDefinitionContainerDefinitionDependsOnList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environment"></a>

```typescript
public readonly environment: EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentList</a>

---

##### `environmentFile`<sup>Required</sup> <a name="environmentFile" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFile"></a>

```typescript
public readonly environmentFile: EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFileList</a>

---

##### `firelensConfiguration`<sup>Required</sup> <a name="firelensConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfiguration"></a>

```typescript
public readonly firelensConfiguration: EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfigurationList</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList">EcsDaemonTaskDefinitionContainerDefinitionHealthCheckList</a>

---

##### `linuxParameters`<sup>Required</sup> <a name="linuxParameters" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParameters"></a>

```typescript
public readonly linuxParameters: EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList">EcsDaemonTaskDefinitionContainerDefinitionLinuxParametersList</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList">EcsDaemonTaskDefinitionContainerDefinitionLogConfigurationList</a>

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: EcsDaemonTaskDefinitionContainerDefinitionMountPointList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPointList">EcsDaemonTaskDefinitionContainerDefinitionMountPointList</a>

---

##### `repositoryCredentials`<sup>Required</sup> <a name="repositoryCredentials" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentials"></a>

```typescript
public readonly repositoryCredentials: EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList</a>

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secret"></a>

```typescript
public readonly secret: EcsDaemonTaskDefinitionContainerDefinitionSecretList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList">EcsDaemonTaskDefinitionContainerDefinitionSecretList</a>

---

##### `systemControl`<sup>Required</sup> <a name="systemControl" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControl"></a>

```typescript
public readonly systemControl: EcsDaemonTaskDefinitionContainerDefinitionSystemControlList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList">EcsDaemonTaskDefinitionContainerDefinitionSystemControlList</a>

---

##### `ulimit`<sup>Required</sup> <a name="ulimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimit"></a>

```typescript
public readonly ulimit: EcsDaemonTaskDefinitionContainerDefinitionUlimitList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList">EcsDaemonTaskDefinitionContainerDefinitionUlimitList</a>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.dependsOnInput"></a>

```typescript
public readonly dependsOnInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionDependsOn[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionDependsOn">EcsDaemonTaskDefinitionContainerDefinitionDependsOn</a>[]

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPointInput"></a>

```typescript
public readonly entryPointInput: string[];
```

- *Type:* string[]

---

##### `environmentFileInput`<sup>Optional</sup> <a name="environmentFileInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentFileInput"></a>

```typescript
public readonly environmentFileInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile">EcsDaemonTaskDefinitionContainerDefinitionEnvironmentFile</a>[]

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionEnvironment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionEnvironment">EcsDaemonTaskDefinitionContainerDefinitionEnvironment</a>[]

---

##### `essentialInput`<sup>Optional</sup> <a name="essentialInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essentialInput"></a>

```typescript
public readonly essentialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `firelensConfigurationInput`<sup>Optional</sup> <a name="firelensConfigurationInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.firelensConfigurationInput"></a>

```typescript
public readonly firelensConfigurationInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration">EcsDaemonTaskDefinitionContainerDefinitionFirelensConfiguration</a>[]

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionHealthCheck[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionHealthCheck">EcsDaemonTaskDefinitionContainerDefinitionHealthCheck</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `interactiveInput`<sup>Optional</sup> <a name="interactiveInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactiveInput"></a>

```typescript
public readonly interactiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `linuxParametersInput`<sup>Optional</sup> <a name="linuxParametersInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.linuxParametersInput"></a>

```typescript
public readonly linuxParametersInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters">EcsDaemonTaskDefinitionContainerDefinitionLinuxParameters</a>[]

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.logConfigurationInput"></a>

```typescript
public readonly logConfigurationInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration">EcsDaemonTaskDefinitionContainerDefinitionLogConfiguration</a>[]

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservationInput"></a>

```typescript
public readonly memoryReservationInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionMountPoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionMountPoint">EcsDaemonTaskDefinitionContainerDefinitionMountPoint</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privilegedInput`<sup>Optional</sup> <a name="privilegedInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privilegedInput"></a>

```typescript
public readonly privilegedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pseudoTerminalInput`<sup>Optional</sup> <a name="pseudoTerminalInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminalInput"></a>

```typescript
public readonly pseudoTerminalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readonlyRootFilesystemInput`<sup>Optional</sup> <a name="readonlyRootFilesystemInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystemInput"></a>

```typescript
public readonly readonlyRootFilesystemInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `repositoryCredentialsInput`<sup>Optional</sup> <a name="repositoryCredentialsInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.repositoryCredentialsInput"></a>

```typescript
public readonly repositoryCredentialsInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.restartPolicyInput"></a>

```typescript
public readonly restartPolicyInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]

---

##### `startTimeoutInput`<sup>Optional</sup> <a name="startTimeoutInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeoutInput"></a>

```typescript
public readonly startTimeoutInput: number;
```

- *Type:* number

---

##### `stopTimeoutInput`<sup>Optional</sup> <a name="stopTimeoutInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeoutInput"></a>

```typescript
public readonly stopTimeoutInput: number;
```

- *Type:* number

---

##### `systemControlInput`<sup>Optional</sup> <a name="systemControlInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.systemControlInput"></a>

```typescript
public readonly systemControlInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSystemControl[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]

---

##### `ulimitInput`<sup>Optional</sup> <a name="ulimitInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.ulimitInput"></a>

```typescript
public readonly ulimitInput: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionUlimit[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.essential"></a>

```typescript
public readonly essential: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `interactive`<sup>Required</sup> <a name="interactive" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.interactive"></a>

```typescript
public readonly interactive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pseudoTerminal`<sup>Required</sup> <a name="pseudoTerminal" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.pseudoTerminal"></a>

```typescript
public readonly pseudoTerminal: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readonlyRootFilesystem`<sup>Required</sup> <a name="readonlyRootFilesystem" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.readonlyRootFilesystem"></a>

```typescript
public readonly readonlyRootFilesystem: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `startTimeout`<sup>Required</sup> <a name="startTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.startTimeout"></a>

```typescript
public readonly startTimeout: number;
```

- *Type:* number

---

##### `stopTimeout`<sup>Required</sup> <a name="stopTimeout" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.stopTimeout"></a>

```typescript
public readonly stopTimeout: number;
```

- *Type:* number

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinition">EcsDaemonTaskDefinitionContainerDefinition</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameterInput">credentialsParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialsParameterInput`<sup>Optional</sup> <a name="credentialsParameterInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameterInput"></a>

```typescript
public readonly credentialsParameterInput: string;
```

- *Type:* string

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```typescript
public readonly credentialsParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials">EcsDaemonTaskDefinitionContainerDefinitionRepositoryCredentials</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetIgnoredExitCodes">resetIgnoredExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetRestartAttemptPeriod">resetRestartAttemptPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoredExitCodes` <a name="resetIgnoredExitCodes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetIgnoredExitCodes"></a>

```typescript
public resetIgnoredExitCodes(): void
```

##### `resetRestartAttemptPeriod` <a name="resetRestartAttemptPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.resetRestartAttemptPeriod"></a>

```typescript
public resetRestartAttemptPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodesInput">ignoredExitCodesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriodInput">restartAttemptPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodes">ignoredExitCodes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriod">restartAttemptPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoredExitCodesInput`<sup>Optional</sup> <a name="ignoredExitCodesInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodesInput"></a>

```typescript
public readonly ignoredExitCodesInput: number[];
```

- *Type:* number[]

---

##### `restartAttemptPeriodInput`<sup>Optional</sup> <a name="restartAttemptPeriodInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriodInput"></a>

```typescript
public readonly restartAttemptPeriodInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoredExitCodes`<sup>Required</sup> <a name="ignoredExitCodes" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.ignoredExitCodes"></a>

```typescript
public readonly ignoredExitCodes: number[];
```

- *Type:* number[]

---

##### `restartAttemptPeriod`<sup>Required</sup> <a name="restartAttemptPeriod" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.restartAttemptPeriod"></a>

```typescript
public readonly restartAttemptPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy">EcsDaemonTaskDefinitionContainerDefinitionRestartPolicy</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionSecretList <a name="EcsDaemonTaskDefinitionContainerDefinitionSecretList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSecret">EcsDaemonTaskDefinitionContainerDefinitionSecret</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionSystemControlList <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControlList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSystemControl[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionSystemControl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionSystemControl">EcsDaemonTaskDefinitionContainerDefinitionSystemControl</a>

---


### EcsDaemonTaskDefinitionContainerDefinitionUlimitList <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimitList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionUlimit[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>[]

---


### EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference <a name="EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimitInput">hardLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimitInput">softLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimit">hardLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimit">softLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hardLimitInput`<sup>Optional</sup> <a name="hardLimitInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimitInput"></a>

```typescript
public readonly hardLimitInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `softLimitInput`<sup>Optional</sup> <a name="softLimitInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimitInput"></a>

```typescript
public readonly softLimitInput: number;
```

- *Type:* number

---

##### `hardLimit`<sup>Required</sup> <a name="hardLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.hardLimit"></a>

```typescript
public readonly hardLimit: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `softLimit`<sup>Required</sup> <a name="softLimit" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.softLimit"></a>

```typescript
public readonly softLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionContainerDefinitionUlimit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionContainerDefinitionUlimit">EcsDaemonTaskDefinitionContainerDefinitionUlimit</a>

---


### EcsDaemonTaskDefinitionVolumeHostList <a name="EcsDaemonTaskDefinitionVolumeHostList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionVolumeHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionVolumeHost[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]

---


### EcsDaemonTaskDefinitionVolumeHostOutputReference <a name="EcsDaemonTaskDefinitionVolumeHostOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resetSourcePath">resetSourcePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourcePath` <a name="resetSourcePath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.resetSourcePath"></a>

```typescript
public resetSourcePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePathInput">sourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePath">sourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourcePathInput`<sup>Optional</sup> <a name="sourcePathInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePathInput"></a>

```typescript
public readonly sourcePathInput: string;
```

- *Type:* string

---

##### `sourcePath`<sup>Required</sup> <a name="sourcePath" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.sourcePath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionVolumeHost;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>

---


### EcsDaemonTaskDefinitionVolumeList <a name="EcsDaemonTaskDefinitionVolumeList" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get"></a>

```typescript
public get(index: number): EcsDaemonTaskDefinitionVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionVolume[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>[]

---


### EcsDaemonTaskDefinitionVolumeOutputReference <a name="EcsDaemonTaskDefinitionVolumeOutputReference" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer"></a>

```typescript
import { ecsDaemonTaskDefinition } from '@cdktn/provider-aws'

new ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHost` <a name="putHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost"></a>

```typescript
public putHost(value: IResolvable | EcsDaemonTaskDefinitionVolumeHost[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.putHost.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]

---

##### `resetHost` <a name="resetHost" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.host">host</a></code> | <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList">EcsDaemonTaskDefinitionVolumeHostList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.hostInput">hostInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.host"></a>

```typescript
public readonly host: EcsDaemonTaskDefinitionVolumeHostList;
```

- *Type:* <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHostList">EcsDaemonTaskDefinitionVolumeHostList</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: IResolvable | EcsDaemonTaskDefinitionVolumeHost[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeHost">EcsDaemonTaskDefinitionVolumeHost</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcsDaemonTaskDefinitionVolume;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ecsDaemonTaskDefinition.EcsDaemonTaskDefinitionVolume">EcsDaemonTaskDefinitionVolume</a>

---



